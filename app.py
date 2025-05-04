from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/comision', methods=['POST'])
def comision():
    nombre = request.form.get('nombre')
    email = request.form.get('email')
    detalle = request.form.get('detalle')
    print(f"Nuevo pedido: {nombre}, {email}, {detalle}")
    return redirect(url_for('home'))

if __name__ == "__main__":
    app.run(debug=True)