import React, { Component, PropTypes } from 'react';
import $ from 'jquery'
import '../../plugins/sticky/jquery.sticky.js'

class Sticky extends Component {
    static defaultProps = {
        children: 'Default Header',
        topSpacing: 0,
        bottomSpacing: 0,
        isStickyClassName: 'is-sticky',
        wrapperClassName: 'sticky-wrapper',
        center: false,
        getWidthFrom: '',
        widthFromWrapper: true,
        responsiveWidth: false,
        zIndex: 'auto'
    }

    static propTypes = {
        children:           PropTypes.string.isRequired,
        onStarted:          PropTypes.func,
        onEnded:            PropTypes.func,
        onUpdated:          PropTypes.func,
        onBottomReached:    PropTypes.func,
        onBottomUnreached:  PropTypes.func,
        topSpacing:         PropTypes.number,
        bottomSpacing:      PropTypes.number,
        isStickyClassName:  PropTypes.string,
        wrapperClassName:   PropTypes.string,
        center:             PropTypes.bool,
        getWidthFrom:       PropTypes.string,
        widthFromWrapper:   PropTypes.bool,
        responsiveWidth:    PropTypes.bool,
        zIndex:             PropTypes.any
    }

    componentDidMount = () => {
        const { sticky } = this.refs
        const { topSpacing, bottomSpacing, isStickyClassName, wrapperClassName, center, getWidthFrom, widthFromWrapper, responsiveWidth, zIndex, onStarted, onEnded, onUpdated, onBottomReached, onBottomUnreached } = this.props

        //  初始化
        $(sticky).sticky({
            topSpacing,
            bottomSpacing,
            className: isStickyClassName,
            wrapperClassName,
            center,
            getWidthFrom,
            widthFromWrapper,
            responsiveWidth,
            zIndex
        });

        //  當元素變成 sticky 元素時觸發
        $(sticky).on('sticky-start', onStarted);

        //  當元素回到初始定位點時觸發
        $(sticky).on('sticky-end', onEnded);

        //  某種更新的時候，不知道實際觸發時機
        $(sticky).on('sticky-update', onUpdated);

        //  不知道實際觸發時機
        $(sticky).on('sticky-bottom-reached', onBottomReached);

        //  不知道實際觸發時機
        $(sticky).on('sticky-bottom-unreached', onBottomUnreached);
    }
    
    render() {
        const { className, children } = this.props

        return (
            <div ref="sticky" className={ className }>
                { children }
            </div>
        );
    }
}

export default Sticky;