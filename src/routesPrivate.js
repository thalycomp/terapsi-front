import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RouterPrivate({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/login" />
  }

  if(signed && !isPrivate) {
    return <Redirect to="/querytherapist" />
  }

  return (
    <Route
      { ...rest }
      component={Component}
    />
  )
}
