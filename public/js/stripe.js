/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async tourId => {
  try {
    if (!window.stripe) {
      showAlert('error', 'Stripe not initialized');
      return;
    }

    // 1) Get checkout session from API
    const res = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );

    if (!res.data.session) {
      showAlert('error', 'No session returned from server');
      return;
    }

    // 2) Create checkout form + charge credit card
    const result = await window.stripe.redirectToCheckout({
      sessionId: res.data.session.id
    });

    if (result.error) {
      showAlert('error', result.error.message);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response?.data?.message || err.message || 'Error booking tour');
  }
};
