# Google Analytics for Rufio

Install the plugin:

	$ npm install --save rufio-google-analytics

Then add `google-analytics` to your enabled plugins in your projects `rufio.json` file.  This will make avaliable the analytics template which can be included like so in a template:

	<%= (config.get('ENVIRONMENT') == 'prod') ? include('analytics.html') : '' %>

Then add the analytics configuration to your `rufio.json`, a `hostname` is also required:

```
	"hostname": "test.com",
	"analytics": {
		"code": "UA-XXXXXXXX-1"
	},
```
