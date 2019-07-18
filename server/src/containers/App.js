import React, { Component } from 'react'
import RouterView from '../router';

function componentName({ history }) {
    return <RouterView history={history}></RouterView>
}
export default componentName