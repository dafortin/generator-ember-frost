/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      outputPath: 'dist/'
    }
  };
  ENV['gh-pages'] = {
    force: process.env.GIT_FORCE_PUSH,
    slack: {
      webhookURL: process.env.WEBHOOK_URL,
      options: {
        channel: process.env.SLACK_CHANNEL
      },
      success (deploy) {
        return `
          Successfully deployed to ${deploy.branch}\n
          Visit at ${process.env.DEMO_URL}
        `;
      }
    }
  };
  ENV.build.environment = deployTarget

  return ENV;
};
