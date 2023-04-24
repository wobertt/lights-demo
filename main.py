from flask import *


app = Flask(__name__)
app.config['SECRET_KEY'] = 'aaaaaaaaaaa'


@app.route('/')
def game():
    return render_template('game.html')


@app.route('/settings', methods=['GET', 'POST'])
def settings():
    if request.method == 'GET':
        return render_template('settings.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=81, debug=True)