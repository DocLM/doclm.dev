
#!/bin/sh
inkscape -w 16 -h 16 -o static/favicon-16x16.png static/favicon.svg
inkscape -w 32 -h 32 -o static/favicon-32x32.png static/favicon.svg
inkscape -w 48 -h 48 -o static/favicon-48x48.png static/favicon.svg
inkscape -w 180 -h 180 -o static/apple-touch-icon.png static/favicon.svg
inkscape -w 192 -h 192 -o static/android-chrome-192x192.png static/favicon.svg
inkscape -w 512 -h 512 -o static/android-chrome-512x512.png static/favicon.svg
convert static/favicon-16x16.png static/favicon-32x32.png static/favicon-48x48.png static/favicon.ico