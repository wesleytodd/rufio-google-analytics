// This plugin just does some validation
module.exports = function(rufio) {

	// Validate config, analytics key required
	rufio.config.validate('analytics', function(val, done) {

		// The analytics key is require
		if (typeof val === 'undefined') {
			return done([
				'The Google Analytics plugin requires configuration.',
				'Your `rufio.json` file should contain something like this:',
				'{',
					'\t"analytics": {',
						'\t\t"code": "UA-XXXXXXXX-1"',
					'\t}',
				'}',
			].join('\n'));
		}
		
		// No errors
		done();
	});

	// Analytics code is required
	rufio.config.validate('analytics:code', function(val, done) {

		if (typeof val === 'undefined' || val == '') {
			return done([
				'The Google Analytics plugin requires a code.',
				'Your `rufio.json` file should contain something like this:',
				'{',
					'\t"analytics": {',
						'\t\t"code": "UA-XXXXXXXX-1"',
					'\t}',
				'}',
			].join('\n'));
		}

		// No errors
		done();
	});

	// Hostname is required
	rufio.config.validate('hostname', function(val, done) {

		if (typeof val === 'undefined' || val == '') {
			return done([
				'The Google Analytics plugin requires a hostname.',
				'Your `rufio.json` file should contain something like this:',
				'{',
					'\t"hostname": "my-site.com"',
				'}',
			].join('\n'));
		}

		// No errors
		done();
	});

};
