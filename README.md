
Tastee-html
===============

Plug-in for Tastee-core (https://github.com/tastee/tastee-core) that allow you to manage Tastee data within html file

## HOW TO USE

If you want to use this plugin, you can run tastee with this option :

```
tastee --extract-from html <your_html_file>
```

If you  run this command with this option and this file :

```
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<pre class="tastee">//savor search_tastee.yaml</pre>
<pre class="tastee">go to 'https://www.google.fr'</pre>
<pre class="tastee">fill 'lst-ib' field with 'https://tastee.github.io/'</pre>
<pre class="tastee">click on '#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)'</pre>
<pre class="tastee">check that '//*[@id="rso"]/div/div/div[1]/div/div/h3/a' is equal to 'Tastee — test framework : test made Natural'</pre>

<p>My first paragraph.</p>

</body>
</html>
```

You obtain this data :

```
[ '//savor search_tastee.yaml',
  'go to \'https://www.google.fr\'',
  'fill \'lst-ib\' field with \'https://tastee.github.io/\'',
  'click on \'#tsf > div.tsf-p > div.jsb > center > input[type="submit"]:nth-child(1)\'',
  'check that \'//*[@id="rso"]/div/div/div[1]/div/div/h3/a\' is equal to \'Tastee — test framework : test made Natural\'',
  '' ]
```

## HOW TO RUN TEST

To run Mocha test :

```
npm test
```

## HOW TO BUILD THIS PLUGIN

To build this plugin :

```
npm run build
```
