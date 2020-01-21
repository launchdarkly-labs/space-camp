#!/usr/bin/env python
# -*- coding: utf-8 -*-

import os
from flask import Flask, request, render_template, jsonify
import test

app = Flask(__name__, static_folder='public', template_folder='views')

@app.route('/')
def pricing():
    """Displays the pricing page."""
    return render_template('pricing.html')

if __name__ == '__main__':
    app.run()