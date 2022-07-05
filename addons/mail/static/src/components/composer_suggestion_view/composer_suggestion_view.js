/** @odoo-module **/

import { useUpdate } from '@mail/component_hooks/use_update';
import { registerMessagingComponent } from '@mail/utils/messaging_component';

const { Component } = owl;

export class ComposerSuggestionView extends Component {

    /**
     * @override
     */
    setup() {
        super.setup();
        useUpdate({ func: () => this._update() });
    }

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    /**
     * @returns {ComposerSuggestionView}
     */
    get composerSuggestionView() {
        return this.props.record;
    }

    //--------------------------------------------------------------------------
    // Private
    //--------------------------------------------------------------------------

    /**
     * @private
     */
    _update() {
        if (
            this.root.el &&
            this.composerSuggestionView.composerSuggestionListViewOwner.composerViewOwner.hasToScrollToActiveSuggestionView &&
            this.composerSuggestionView.composerViewOwnerAsActiveSuggestionView
        ) {
            this.root.el.scrollIntoView({
                block: 'center',
            });
            this.composerSuggestionView.composerSuggestionListViewOwner.composerViewOwner.update({ hasToScrollToActiveSuggestionView: false });
        }
    }

}

Object.assign(ComposerSuggestionView, {
    props: { record: Object },
    template: 'mail.ComposerSuggestionView',
});

registerMessagingComponent(ComposerSuggestionView);
