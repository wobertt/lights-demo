from flask import *


app = Flask(__name__)
app.config['SECRET_KEY'] = 'aaaaaaaaaaa'


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/game')
def game():
    return render_template('game.html')


@app.route('/settings', methods=['GET', 'POST'])
def settings():
    if request.method == 'GET':
        return render_template('settings.html')
    
    width, height = request.form['width'], request.form['height']
    print(width, height)
    return redirect(url_for('game'))


@app.route('/subsets')
def subsets():
    return render_template('subsets.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81, debug=True)