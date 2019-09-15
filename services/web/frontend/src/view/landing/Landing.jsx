import React from 'react';

export default function wrapLandingPage(WrappedComponent) {
    return class extends React.Component {

        render() {
            return <WrappedComponent {...this.props}/>
        }
    }
}