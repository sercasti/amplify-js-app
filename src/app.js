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

Analytics.autoTrack('event', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
  // OPTIONAL, events you want to track, by default is 'click'
  events: ['click'],
  // OPTIONAL, the prefix of the selectors, by default is 'data-amplify-analytics-'
  // in order to avoid collision with the user agent, according to https://www.w3schools.com/tags/att_global_data.asp
  // always put 'data' as the first prefix
  selectorPrefix: 'data-amplify-analytics-',
  // OPTIONAL, the service provider, by default is the AWS Pinpoint
  provider: 'AWSPinpoint',
  // OPTIONAL, the default attributes of the event, you can either pass an object or a function 
  // which allows you to define dynamic attributes
  attributes: {
      attr: 'attr'
  }
  // when using function
  // attributes: () => {
  //    const attr = somewhere();
  //    return {
  //        myAttr: attr
  //    }
  // }
});