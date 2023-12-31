/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessPredicate } from '@angular/cdk/testing';
import { _MatRadioGroupHarnessBase, _MatRadioButtonHarnessBase, } from '@angular/material/radio/testing';
/**
 * Harness for interacting with a standard mat-radio-group in tests
 * @deprecated Use `MatRadioGroupHarness` from `@angular/material/radio/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyRadioGroupHarness extends _MatRadioGroupHarnessBase {
    constructor() {
        super(...arguments);
        this._buttonClass = MatLegacyRadioButtonHarness;
    }
    /** The selector for the host element of a `MatRadioGroup` instance. */
    static { this.hostSelector = '.mat-radio-group'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatRadioGroupHarness` that meets
     * certain criteria.
     * @param options Options for filtering which radio group instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyRadioGroupHarness, options).addOption('name', options.name, this._checkRadioGroupName);
    }
}
/**
 * Harness for interacting with a standard mat-radio-button in tests.
 * @deprecated Use `MatRadioButtonHarness` from `@angular/material/radio/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyRadioButtonHarness extends _MatRadioButtonHarnessBase {
    constructor() {
        super(...arguments);
        this._textLabel = this.locatorFor('.mat-radio-label-content');
        this._clickLabel = this.locatorFor('.mat-radio-label');
    }
    /** The selector for the host element of a `MatRadioButton` instance. */
    static { this.hostSelector = '.mat-radio-button'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatRadioButtonHarness` that meets
     * certain criteria.
     * @param options Options for filtering which radio button instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyRadioButtonHarness, options)
            .addOption('label', options.label, (harness, label) => HarnessPredicate.stringMatches(harness.getLabelText(), label))
            .addOption('name', options.name, async (harness, name) => (await harness.getName()) === name)
            .addOption('checked', options.checked, async (harness, checked) => (await harness.isChecked()) == checked);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8taGFybmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9sZWdhY3ktcmFkaW8vdGVzdGluZy9yYWRpby1oYXJuZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFHTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0saUNBQWlDLENBQUM7QUFFekM7Ozs7R0FJRztBQUNILE1BQU0sT0FBTywwQkFBMkIsU0FBUSx5QkFJL0M7SUFKRDs7UUFPWSxpQkFBWSxHQUFHLDJCQUEyQixDQUFDO0lBaUJ2RCxDQUFDO0lBbkJDLHVFQUF1RTthQUNoRSxpQkFBWSxHQUFHLGtCQUFrQixBQUFyQixDQUFzQjtJQUd6Qzs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQ1QsVUFBb0MsRUFBRTtRQUV0QyxPQUFPLElBQUksZ0JBQWdCLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUN4RSxNQUFNLEVBQ04sT0FBTyxDQUFDLElBQUksRUFDWixJQUFJLENBQUMsb0JBQW9CLENBQzFCLENBQUM7SUFDSixDQUFDOztBQUdIOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsMEJBQTBCO0lBQTNFOztRQXlCWSxlQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3pELGdCQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUExQkMsd0VBQXdFO2FBQ2pFLGlCQUFZLEdBQUcsbUJBQW1CLEFBQXRCLENBQXVCO0lBRTFDOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FDVCxVQUFxQyxFQUFFO1FBRXZDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUM7YUFDOUQsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3BELGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQzlEO2FBQ0EsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDO2FBQzVGLFNBQVMsQ0FDUixTQUFTLEVBQ1QsT0FBTyxDQUFDLE9BQU8sRUFDZixLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FDbkUsQ0FBQztJQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtIYXJuZXNzUHJlZGljYXRlfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge1xuICBSYWRpb0J1dHRvbkhhcm5lc3NGaWx0ZXJzLFxuICBSYWRpb0dyb3VwSGFybmVzc0ZpbHRlcnMsXG4gIF9NYXRSYWRpb0dyb3VwSGFybmVzc0Jhc2UsXG4gIF9NYXRSYWRpb0J1dHRvbkhhcm5lc3NCYXNlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpby90ZXN0aW5nJztcblxuLyoqXG4gKiBIYXJuZXNzIGZvciBpbnRlcmFjdGluZyB3aXRoIGEgc3RhbmRhcmQgbWF0LXJhZGlvLWdyb3VwIGluIHRlc3RzXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE1hdFJhZGlvR3JvdXBIYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9yYWRpby90ZXN0aW5nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRMZWdhY3lSYWRpb0dyb3VwSGFybmVzcyBleHRlbmRzIF9NYXRSYWRpb0dyb3VwSGFybmVzc0Jhc2U8XG4gIHR5cGVvZiBNYXRMZWdhY3lSYWRpb0J1dHRvbkhhcm5lc3MsXG4gIE1hdExlZ2FjeVJhZGlvQnV0dG9uSGFybmVzcyxcbiAgUmFkaW9CdXR0b25IYXJuZXNzRmlsdGVyc1xuPiB7XG4gIC8qKiBUaGUgc2VsZWN0b3IgZm9yIHRoZSBob3N0IGVsZW1lbnQgb2YgYSBgTWF0UmFkaW9Hcm91cGAgaW5zdGFuY2UuICovXG4gIHN0YXRpYyBob3N0U2VsZWN0b3IgPSAnLm1hdC1yYWRpby1ncm91cCc7XG4gIHByb3RlY3RlZCBfYnV0dG9uQ2xhc3MgPSBNYXRMZWdhY3lSYWRpb0J1dHRvbkhhcm5lc3M7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgYE1hdFJhZGlvR3JvdXBIYXJuZXNzYCB0aGF0IG1lZXRzXG4gICAqIGNlcnRhaW4gY3JpdGVyaWEuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCByYWRpbyBncm91cCBpbnN0YW5jZXMgYXJlIGNvbnNpZGVyZWQgYSBtYXRjaC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChcbiAgICBvcHRpb25zOiBSYWRpb0dyb3VwSGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogSGFybmVzc1ByZWRpY2F0ZTxNYXRMZWdhY3lSYWRpb0dyb3VwSGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRMZWdhY3lSYWRpb0dyb3VwSGFybmVzcywgb3B0aW9ucykuYWRkT3B0aW9uKFxuICAgICAgJ25hbWUnLFxuICAgICAgb3B0aW9ucy5uYW1lLFxuICAgICAgdGhpcy5fY2hlY2tSYWRpb0dyb3VwTmFtZSxcbiAgICApO1xuICB9XG59XG5cbi8qKlxuICogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIHN0YW5kYXJkIG1hdC1yYWRpby1idXR0b24gaW4gdGVzdHMuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE1hdFJhZGlvQnV0dG9uSGFybmVzc2AgZnJvbSBgQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8vdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgY2xhc3MgTWF0TGVnYWN5UmFkaW9CdXR0b25IYXJuZXNzIGV4dGVuZHMgX01hdFJhZGlvQnV0dG9uSGFybmVzc0Jhc2Uge1xuICAvKiogVGhlIHNlbGVjdG9yIGZvciB0aGUgaG9zdCBlbGVtZW50IG9mIGEgYE1hdFJhZGlvQnV0dG9uYCBpbnN0YW5jZS4gKi9cbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LXJhZGlvLWJ1dHRvbic7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgYE1hdFJhZGlvQnV0dG9uSGFybmVzc2AgdGhhdCBtZWV0c1xuICAgKiBjZXJ0YWluIGNyaXRlcmlhLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBmaWx0ZXJpbmcgd2hpY2ggcmFkaW8gYnV0dG9uIGluc3RhbmNlcyBhcmUgY29uc2lkZXJlZCBhIG1hdGNoLlxuICAgKiBAcmV0dXJuIGEgYEhhcm5lc3NQcmVkaWNhdGVgIGNvbmZpZ3VyZWQgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICovXG4gIHN0YXRpYyB3aXRoKFxuICAgIG9wdGlvbnM6IFJhZGlvQnV0dG9uSGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogSGFybmVzc1ByZWRpY2F0ZTxNYXRMZWdhY3lSYWRpb0J1dHRvbkhhcm5lc3M+IHtcbiAgICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUoTWF0TGVnYWN5UmFkaW9CdXR0b25IYXJuZXNzLCBvcHRpb25zKVxuICAgICAgLmFkZE9wdGlvbignbGFiZWwnLCBvcHRpb25zLmxhYmVsLCAoaGFybmVzcywgbGFiZWwpID0+XG4gICAgICAgIEhhcm5lc3NQcmVkaWNhdGUuc3RyaW5nTWF0Y2hlcyhoYXJuZXNzLmdldExhYmVsVGV4dCgpLCBsYWJlbCksXG4gICAgICApXG4gICAgICAuYWRkT3B0aW9uKCduYW1lJywgb3B0aW9ucy5uYW1lLCBhc3luYyAoaGFybmVzcywgbmFtZSkgPT4gKGF3YWl0IGhhcm5lc3MuZ2V0TmFtZSgpKSA9PT0gbmFtZSlcbiAgICAgIC5hZGRPcHRpb24oXG4gICAgICAgICdjaGVja2VkJyxcbiAgICAgICAgb3B0aW9ucy5jaGVja2VkLFxuICAgICAgICBhc3luYyAoaGFybmVzcywgY2hlY2tlZCkgPT4gKGF3YWl0IGhhcm5lc3MuaXNDaGVja2VkKCkpID09IGNoZWNrZWQsXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIF90ZXh0TGFiZWwgPSB0aGlzLmxvY2F0b3JGb3IoJy5tYXQtcmFkaW8tbGFiZWwtY29udGVudCcpO1xuICBwcm90ZWN0ZWQgX2NsaWNrTGFiZWwgPSB0aGlzLmxvY2F0b3JGb3IoJy5tYXQtcmFkaW8tbGFiZWwnKTtcbn1cbiJdfQ==