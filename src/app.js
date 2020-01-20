import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';

const amplifyConfig = {
  Auth: {
    identityPoolId: 'us-east-1:84342297-9dad-40dc-b98e-f57f5ee4e739',
    region: 'us-east-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);

const analyticsConfig = {
  AWSPinpoint: {
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)

Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device = 'browser', event: 'play', media: 'VoD Lidio Ramalho', device ='app_mobile', videotime = '40', userid='12'}
});