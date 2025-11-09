from flask import Flask
from flask_autoindex import AutoIndex
import os
import sys

# Configurable host and port via environment variables
HOST = os.environ.get("HOST", "localhost")
PORT = int(os.environ.get("PORT", "5555"))

ppath = os.path.abspath(os.path.join(os.getcwd(), os.pardir, "userscripts"))
# Validate path exists
if not os.path.isdir(ppath):
    print(f"ERROR: Browse root does not exist: {ppath}", file=sys.stderr)
    sys.exit(1)

print("#### Starting update server...")
print(f"#### Serving dir: {ppath}")
print(f"#### Serving URL: http://{HOST}:{PORT}/")

app = Flask(__name__)


AutoIndex(app, browse_root=ppath)

if __name__ == "__main__":
    app.run(host=HOST, debug=True, port=PORT)