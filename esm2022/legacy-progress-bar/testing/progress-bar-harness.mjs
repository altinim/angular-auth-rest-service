/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { ComponentHarness, HarnessPredicate } from '@angular/cdk/testing';
/**
 * Harness for interacting with a standard mat-progress-bar in tests.
 * @deprecated Use `MatProgressBarHarness` from `@angular/material/progress-bar/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyProgressBarHarness extends ComponentHarness {
    /** The selector for the host element of a `MatProgressBar` instance. */
    static { this.hostSelector = '.mat-progress-bar'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatProgressBarHarness` that meets
     * certain criteria.
     * @param options Options for filtering which progress bar instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyProgressBarHarness, options);
    }
    /** Gets the progress bar's value. */
    async getValue() {
        const host = await this.host();
        const ariaValue = await host.getAttribute('aria-valuenow');
        return ariaValue ? coerceNumberProperty(ariaValue) : null;
    }
    /** Gets the progress bar's mode. */
    async getMode() {
        return (await this.host()).getAttribute('mode');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbGVnYWN5LXByb2dyZXNzLWJhci90ZXN0aW5nL3Byb2dyZXNzLWJhci1oYXJuZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBR3hFOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsZ0JBQWdCO0lBQy9ELHdFQUF3RTthQUNqRSxpQkFBWSxHQUFHLG1CQUFtQixDQUFDO0lBRTFDOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FDVCxVQUFxQyxFQUFFO1FBRXZDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQscUNBQXFDO0lBQ3JDLEtBQUssQ0FBQyxRQUFRO1FBQ1osTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDL0IsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNELE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsS0FBSyxDQUFDLE9BQU87UUFDWCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2NvZXJjZU51bWJlclByb3BlcnR5fSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHtDb21wb25lbnRIYXJuZXNzLCBIYXJuZXNzUHJlZGljYXRlfSBmcm9tICdAYW5ndWxhci9jZGsvdGVzdGluZyc7XG5pbXBvcnQge1Byb2dyZXNzQmFySGFybmVzc0ZpbHRlcnN9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhci90ZXN0aW5nJztcblxuLyoqXG4gKiBIYXJuZXNzIGZvciBpbnRlcmFjdGluZyB3aXRoIGEgc3RhbmRhcmQgbWF0LXByb2dyZXNzLWJhciBpbiB0ZXN0cy5cbiAqIEBkZXByZWNhdGVkIFVzZSBgTWF0UHJvZ3Jlc3NCYXJIYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXIvdGVzdGluZ2AgaW5zdGVhZC4gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS9tZGMtbWlncmF0aW9uIGZvciBpbmZvcm1hdGlvbiBhYm91dCBtaWdyYXRpbmcuXG4gKiBAYnJlYWtpbmctY2hhbmdlIDE3LjAuMFxuICovXG5leHBvcnQgY2xhc3MgTWF0TGVnYWN5UHJvZ3Jlc3NCYXJIYXJuZXNzIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcyB7XG4gIC8qKiBUaGUgc2VsZWN0b3IgZm9yIHRoZSBob3N0IGVsZW1lbnQgb2YgYSBgTWF0UHJvZ3Jlc3NCYXJgIGluc3RhbmNlLiAqL1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJy5tYXQtcHJvZ3Jlc3MtYmFyJztcblxuICAvKipcbiAgICogR2V0cyBhIGBIYXJuZXNzUHJlZGljYXRlYCB0aGF0IGNhbiBiZSB1c2VkIHRvIHNlYXJjaCBmb3IgYSBgTWF0UHJvZ3Jlc3NCYXJIYXJuZXNzYCB0aGF0IG1lZXRzXG4gICAqIGNlcnRhaW4gY3JpdGVyaWEuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBwcm9ncmVzcyBiYXIgaW5zdGFuY2VzIGFyZSBjb25zaWRlcmVkIGEgbWF0Y2guXG4gICAqIEByZXR1cm4gYSBgSGFybmVzc1ByZWRpY2F0ZWAgY29uZmlndXJlZCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdpdGgoXG4gICAgb3B0aW9uczogUHJvZ3Jlc3NCYXJIYXJuZXNzRmlsdGVycyA9IHt9LFxuICApOiBIYXJuZXNzUHJlZGljYXRlPE1hdExlZ2FjeVByb2dyZXNzQmFySGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRMZWdhY3lQcm9ncmVzc0Jhckhhcm5lc3MsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIHByb2dyZXNzIGJhcidzIHZhbHVlLiAqL1xuICBhc3luYyBnZXRWYWx1ZSgpOiBQcm9taXNlPG51bWJlciB8IG51bGw+IHtcbiAgICBjb25zdCBob3N0ID0gYXdhaXQgdGhpcy5ob3N0KCk7XG4gICAgY29uc3QgYXJpYVZhbHVlID0gYXdhaXQgaG9zdC5nZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnKTtcbiAgICByZXR1cm4gYXJpYVZhbHVlID8gY29lcmNlTnVtYmVyUHJvcGVydHkoYXJpYVZhbHVlKSA6IG51bGw7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgcHJvZ3Jlc3MgYmFyJ3MgbW9kZS4gKi9cbiAgYXN5bmMgZ2V0TW9kZSgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS5nZXRBdHRyaWJ1dGUoJ21vZGUnKTtcbiAgfVxufVxuIl19