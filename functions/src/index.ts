import * as sgMail from '@sendgrid/mail';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

admin.initializeApp();
const API_KEY = functions.config().sendgrid.key;
const TEMPLATE_ID = functions.config().sendgrid.template;
sgMail.setApiKey(API_KEY);

export const welcomeEmail = functions
  .region('europe-west1')
  .firestore.document('job_applications/{applicationId}')
  .onCreate((snap) => {
    const newValue = snap.data();
    const message = {
      to: newValue.email,
      from: 'posao@koda95doo.com',
      templateId: TEMPLATE_ID,
    };
    return sgMail.send(message);
  });
