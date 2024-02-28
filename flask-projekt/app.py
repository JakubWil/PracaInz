from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup
from datetime import datetime

app = Flask(__name__)
CORS(app, resources={r"/scan": {"origins": "http://localhost:3000"}})

def calculate_overall_risk(risk_levels):
    if risk_levels['High'] >= 2:
        return 'High'
    elif risk_levels['Medium'] >= 1:
        return 'Medium'
    else:
        return 'Low'


def scan_for_vulnerabilities(target_url):
    vulnerabilities = []
    total_vulnerabilities = 0
    risk_levels = {'High': 0, 'Medium': 0, 'Low': 0}
    

    # Dodane linie
    start_time = datetime.now()


    

    try:
        # Pobierz zawartość strony
        response = requests.get(target_url)
        soup = BeautifulSoup(response.text, 'html.parser')

        # Przykładowy test SQL Injection
        sql_injection_test = soup.find('input', {'name': 'username'})
        if sql_injection_test:
            vulnerabilities.append({
                'type': 'SQL Injection',
                'description': 'Possible SQL Injection vulnerability found',
                'location': str(sql_injection_test),
                'solution': 'Use parameterized queries',
                'risk': 'High',
                'risk_description': 'An SQL Injection vulnerability allows attackers to manipulate a database by injecting malicious SQL code. It can lead to unauthorized access, data manipulation, and other security breaches.',
                'recommendations': [
                    'Use parameterized queries to sanitize user input.',
                    'Implement input validation and validation on the server side.'
                ]
            })
            risk_levels['High'] += 1
            total_vulnerabilities += 1

        # Przykładowy test Cross-Site Scripting (XSS)
        xss_test = soup.find('script')
        if xss_test:
            vulnerabilities.append({
                'type': 'XSS',
                'description': 'Possible XSS vulnerability found',
                'location': str(xss_test),
                'solution': 'Escape user input and validate/sanitize data on the server side',
                'risk': 'Medium',
                'risk_description': 'Cross-Site Scripting (XSS) allows attackers to inject malicious scripts into web pages viewed by other users. It can lead to theft of sensitive information, session hijacking, and other security issues.',
                'recommendations': [
                    'Escape user input to prevent script injection.',
                    'Implement content security policies (CSP) to mitigate XSS attacks.'
                ]
            })
            risk_levels['Medium'] += 1
            total_vulnerabilities += 1

        # Test czytelności kodu źródłowego
        source_code_test = response.text.lower().count('password')
        if source_code_test > 0:
            vulnerabilities.append({
                'type': 'Sensitive Information Exposure',
                'description': 'Possible sensitive information in source code',
                'location': 'Entire source code',
                'solution': 'Review and remove sensitive information from source code',
                'risk': 'High',
                'risk_description': 'The presence of sensitive information in source code may expose credentials or other confidential data. It can lead to unauthorized access or data leaks.',
                'recommendations': [
                    'Review and remove sensitive information from source code.',
                    'Implement secure coding practices.'
                ]
            })
            risk_levels['High'] += 1
            total_vulnerabilities += 1

        # Test ataków CSRF
        csrf_test = soup.find('input', {'name': 'csrf_token'})
        if not csrf_test:
            vulnerabilities.append({
                'type': 'CSRF',
                'description': 'CSRF token missing',
                'location': 'Form or request',
                'solution': 'Implement and validate CSRF tokens in forms',
                'risk': 'Low',
                'risk_description': 'Cross-Site Request Forgery (CSRF) allows attackers to perform actions on behalf of authenticated users without their consent. It can lead to unauthorized actions and data manipulation.',
                'recommendations': [
                    'Implement and validate CSRF tokens in forms.',
                    'Use anti-CSRF tokens to protect against CSRF attacks.'
                ]
            })
            risk_levels['Low'] += 1
            total_vulnerabilities += 1

        # Test bezpieczeństwa nagłówków HTTP
        headers = response.headers
        if 'content-security-policy' not in headers or 'strict-transport-security' not in headers:
            vulnerabilities.append({
                'type': 'Missing Security Headers',
                'description': 'Security headers missing',
                'location': 'HTTP response headers',
                'solution': 'Implement proper security headers, such as Content Security Policy (CSP) and Strict-Transport-Security (HSTS)',
                'risk': 'Medium',
                'risk_description': 'Missing security headers can expose the application to various security risks, including cross-site scripting (XSS), clickjacking, and other attacks.',
                'recommendations': [
                    'Implement proper security headers, such as Content Security Policy (CSP) and Strict-Transport-Security (HSTS).',
                    'Regularly review and update security headers based on best practices.'
                ]
            })
            risk_levels['Medium'] += 1
            total_vulnerabilities += 1

        # Analiza zdalnych zasobów
        remote_resource_test = soup.find('img', {'src': 'http://evil.com/malicious-script.js'})
        if remote_resource_test:
            vulnerabilities.append({
                'type': 'Remote Resource Inclusion (RRI)',
                'description': 'Possible Remote Resource Inclusion vulnerability',
                'location': str(remote_resource_test),
                'solution': 'Validate and sanitize remote resources',
                'risk': 'Medium',
                'risk_description': 'Remote Resource Inclusion (RRI) vulnerabilities occur when an application includes external resources without proper validation. It can lead to the execution of malicious scripts or content.',
                'recommendations': [
                    'Validate and sanitize remote resources before including them.',
                    'Implement a Content Security Policy (CSP) to restrict external resource inclusion.'
                ]
            })
            risk_levels['Medium'] += 1
            total_vulnerabilities += 1


        # Przykładowy test Cross-Site Request Forgery (CSRF)
        csrf_test_new = soup.find('form')
        if csrf_test_new:
            vulnerabilities.append({
                'type': 'CSRF',
                'description': 'Possible CSRF vulnerability found',
                'location': str(csrf_test_new),
                'solution': 'Implement and validate CSRF tokens in forms',
                'risk': 'Medium',
                'risk_description': 'Moderate risk of unauthorized actions on behalf of the user',
                'recommendations': [
                    'It is advisable to implement and validate CSRF tokens in forms.',
                    'There is a moderate risk of unauthorized actions on behalf of the user.'
                ]
            })
            risk_levels['Medium'] += 1
            total_vulnerabilities += 1

        # Przykładowy test Insecure Direct Object References (IDOR)
        idor_test = soup.find('a', {'href': 'http://example.com/user/profile'})
        if idor_test:
            vulnerabilities.append({
                'type': 'IDOR',
                'description': 'Possible Insecure Direct Object References vulnerability found',
                'location': str(idor_test),
                'solution': 'Implement proper access controls and validate user permissions',
                'risk': 'High',
                'risk_description': 'Critical risk of unauthorized access to sensitive data or functionality',
                'recommendations': [
                    'Implement proper access controls and validate user permissions.',
                    'There is a critical risk of unauthorized access to sensitive data or functionality.'
                ]
            })
            risk_levels['High'] += 1
            total_vulnerabilities += 1
            
        
        # Dodane linie
        finish_time = datetime.now()
        scan_duration = finish_time - start_time

        if vulnerabilities:
             overall_risk = calculate_overall_risk(risk_levels)
             return {'vulnerabilities': vulnerabilities, 'summary': risk_levels, 'total_vulnerabilities': total_vulnerabilities,  'overall_risk': overall_risk, 'startTime': start_time.strftime('%Y-%m-%d %H:%M:%S UTC%z'),
                'finishTime': finish_time.strftime('%Y-%m-%d %H:%M:%S UTC%z'),
                'scanDuration': str(scan_duration),'target_url': target_url}
        else:
            return {'message': f'Scan results for {target_url}: No vulnerabilities found'}

    except requests.RequestException as e:
        return {'error': f'Error scanning {target_url}: {str(e)}'}

@app.route('/scan', methods=['POST'])
def scan_website():
    data = request.get_json()
    target_url = data.get('url')

    results = scan_for_vulnerabilities(target_url)
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True)
