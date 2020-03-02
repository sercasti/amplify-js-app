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

const AnalyticsPlayButton1 = document.getElementById('AnalyticsPlayButton1');
const AnalyticsStopButton1 = document.getElementById('AnalyticsStopButton1');
AnalyticsPlayButton1.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'play', media: 'VoD Werner Vogels', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

AnalyticsStopButton1.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'stop', media: 'VoD Werner Vogels', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

const AnalyticsPlayButton2 = document.getElementById('AnalyticsPlayButton2');
const AnalyticsStopButton2 = document.getElementById('AnalyticsStopButton2');
AnalyticsPlayButton2.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'play', media: 'VoD Lidio Ramalho', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

AnalyticsStopButton2.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'stop', media: 'VoD Lidio Ramalho', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

const AnalyticsPlayButton3 = document.getElementById('AnalyticsPlayButton3');
const AnalyticsStopButton3 = document.getElementById('AnalyticsStopButton3');
AnalyticsPlayButton3.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'play', media: 'VoD Samir Araujo', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

AnalyticsStopButton3.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'stop', media: 'VoD Samir Araujo', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

const AnalyticsPlayButton4 = document.getElementById('AnalyticsPlayButton4');
const AnalyticsStopButton4 = document.getElementById('AnalyticsStopButton4');
AnalyticsPlayButton4.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'play', media: 'VoD Marcello Zillo', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});

AnalyticsStopButton4.addEventListener('click', (evt) => {
  Analytics.record({
    name: 'VideoOnDemand',
    attributes: { device : 'browser', event: 'stop', media: 'VoD Marcello Zillo', device : 'browser', videotime : '40', userid : '12'}   
  }); 
});