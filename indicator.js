/*!
 * jQuery Indicator
 * https://github.com/tropperstyle/jquery-indicator
 *
 * Copyright, Jonathan Tropper.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * MIT-LICENSE.txt
 * GPL-LICENSE.txt
 */
 
(function($) {
    $.widget('ui.indicator', {
        options: {},
        _create: function() {            
            this.indicator = $('<img/>', {
                'src': $.ui.indicator.preloader.sources.loading,
                'class': 'ui-indicator',
                'css': {
                    verticalAlign: 'middle',
                    paddingLeft: 5
                }
            });
            this.indicator.insertAfter(this.element);
        },
        _init: function() {
            window.clearTimeout(this.removeTimer);
            this.indicator.attr('src', $.ui.indicator.preloader.sources.loading);
        },
        destroy: function() {
            this.indicator.remove();
            $.Widget.prototype.destroy.apply(this, arguments);
        },
        stop: function(state) {
            state = state || 'success';
            var self = this;
            this.indicator.attr('src', $.ui.indicator.preloader.sources[state]);
            this.removeTimer = window.setTimeout(function() {
                self.indicator.fadeOut(function() {
                    self.destroy();
                });
            }, 2500);
        }
    });
    
    $.ui.indicator.preloader = new ImagePreloader();
    $.ui.indicator.preloader.load({
        loading: '/javascripts/jquery/1.4/themes/corestore/images/ui-anim.basic.16x16.gif',
        success: '/images/fugue/icons/tick-circle-frame.png'
    });
})(jQuery);
