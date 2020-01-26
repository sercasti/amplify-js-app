import Analytics from '@aws-amplify/analytics';
import Auth from '@aws-amplify/auth';


const amplifyConfig = {
  Auth: {
    identityPoolId: 'us-east-1:443c44b1-f369-4d6e-94ce-4b83bc4d7fb2',
    region: 'us-east-1'
  }
}
//Initialize Amplify
Auth.configure(amplifyConfig);


const analyticsConfig = {
  AWSPinpoint: {
    // Amazon Pinpoint App Client ID
    appId: '7a88a3e232e74d66ac2fe37e283f3f87',
    // Amazon service region
    region: 'us-east-1',
    mandatorySignIn: false
  }
}

Analytics.configure(analyticsConfig)

const AnalyticsPlayButton = document.getElementById('AnalyticsPlayButton');
const AnalyticsStopButton = document.getElementById('AnalyticsStopButton');
AnalyticsPlayButton.addEventListener('click', (evt) => {
    Analytics.record({
      name: 'VideoOnDemand',
      attributes: { device : 'browser', event: 'play', media: 'VoD Lidio Ramalho', device : 'app_mobile', videotime : '40', userid : '12'}   
    }); 
});

AnalyticsStopButton.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'stop', media: 'VoD Lidio Ramalho', device : 'app_mobile', videotime : '40', userid : '12'}   
  }); 
});