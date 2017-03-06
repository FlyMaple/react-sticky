import React, { Component } from 'react';

import Sticky from './Sticky'

class App extends Component {
    render() {
        return (
            <div id="app">
                <Sticky className="skye-header"
                    topSpacing={ 0 }
                    bottomSpacing={ 0 }
                    isStickyClassName={ 'is-sticly' }
                    wrapperClassName={ 'sticky-wrapper' }
                    center={ false }
                    getWidthFrom={ '' }
                    widthFromWrapper={ true }
                    responsiveWidth={ false }
                    zIndex={ 'auto' }>
                    Header
                </Sticky>

                <div className="h400"></div>

                <Sticky className="skye-header2"
                    topSpacing={ 80 }>
                    123
                </Sticky>

                <div className="h600"></div>
                
                <Sticky className="skye-header3"
                    topSpacing={ 160 } />
            </div>
        );
    }
}

export default App;