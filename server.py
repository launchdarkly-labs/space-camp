from flask import Flask, render_template

app = Flask(__name__, static_folder='public', template_folder='views')

@app.route('/')
def pricing():
    """Displays the pricing page."""
    return render_template('pricing.html')

if __name__ == '__main__':
    app.run()