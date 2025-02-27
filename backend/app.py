from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/traffic', methods=['GET'])
def get_traffic_data():
    # Sample traffic data
    traffic_data = {
        "visitors": 150,
        "pageViews": 300,
        "uniqueVisitors": 120
    }
    return jsonify(traffic_data)

if __name__ == '__main__':
    app.run()
