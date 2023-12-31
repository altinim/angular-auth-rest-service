/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatLegacyOptgroupHarness, MatLegacyOptionHarness, } from '@angular/material/legacy-core/testing';
import { _MatAutocompleteHarnessBase } from '@angular/material/autocomplete/testing';
/**
 * Harness for interacting with a standard mat-autocomplete in tests.
 * @deprecated Use `MatAutocompleteHarness` from `@angular/material/autocomplete/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyAutocompleteHarness extends _MatAutocompleteHarnessBase {
    constructor() {
        super(...arguments);
        this._prefix = 'mat';
        this._optionClass = MatLegacyOptionHarness;
        this._optionGroupClass = MatLegacyOptgroupHarness;
    }
    /** The selector for the host element of a `MatAutocomplete` instance. */
    static { this.hostSelector = '.mat-autocomplete-trigger'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatAutocompleteHarness` that meets
     * certain criteria.
     * @param options Options for filtering which autocomplete instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyAutocompleteHarness, options)
            .addOption('value', options.value, (harness, value) => HarnessPredicate.stringMatches(harness.getValue(), value))
            .addOption('disabled', options.disabled, async (harness, disabled) => {
            return (await harness.isDisabled()) === disabled;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvbGVnYWN5LWF1dG9jb21wbGV0ZS90ZXN0aW5nL2F1dG9jb21wbGV0ZS1oYXJuZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFDTCx3QkFBd0IsRUFDeEIsc0JBQXNCLEdBR3ZCLE1BQU0sdUNBQXVDLENBQUM7QUFDL0MsT0FBTyxFQUFDLDJCQUEyQixFQUFDLE1BQU0sd0NBQXdDLENBQUM7QUFHbkY7Ozs7R0FJRztBQUNILE1BQU0sT0FBTyw0QkFBNkIsU0FBUSwyQkFPakQ7SUFQRDs7UUFRWSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGlCQUFZLEdBQUcsc0JBQXNCLENBQUM7UUFDdEMsc0JBQWlCLEdBQUcsd0JBQXdCLENBQUM7SUFzQnpELENBQUM7SUFwQkMseUVBQXlFO2FBQ2xFLGlCQUFZLEdBQUcsMkJBQTJCLEFBQTlCLENBQStCO0lBRWxEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FDVCxVQUE0QyxFQUFFO1FBRTlDLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUM7YUFDL0QsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQ3BELGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQzFEO2FBQ0EsU0FBUyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDbkUsT0FBTyxDQUFDLE1BQU0sT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssUUFBUSxDQUFDO1FBQ25ELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0hhcm5lc3NQcmVkaWNhdGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7XG4gIE1hdExlZ2FjeU9wdGdyb3VwSGFybmVzcyxcbiAgTWF0TGVnYWN5T3B0aW9uSGFybmVzcyxcbiAgTGVnYWN5T3B0Z3JvdXBIYXJuZXNzRmlsdGVycyxcbiAgTGVnYWN5T3B0aW9uSGFybmVzc0ZpbHRlcnMsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xlZ2FjeS1jb3JlL3Rlc3RpbmcnO1xuaW1wb3J0IHtfTWF0QXV0b2NvbXBsZXRlSGFybmVzc0Jhc2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZS90ZXN0aW5nJztcbmltcG9ydCB7TGVnYWN5QXV0b2NvbXBsZXRlSGFybmVzc0ZpbHRlcnN9IGZyb20gJy4vYXV0b2NvbXBsZXRlLWhhcm5lc3MtZmlsdGVycyc7XG5cbi8qKlxuICogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIHN0YW5kYXJkIG1hdC1hdXRvY29tcGxldGUgaW4gdGVzdHMuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE1hdEF1dG9jb21wbGV0ZUhhcm5lc3NgIGZyb20gYEBhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZS90ZXN0aW5nYCBpbnN0ZWFkLiBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2d1aWRlL21kYy1taWdyYXRpb24gZm9yIGluZm9ybWF0aW9uIGFib3V0IG1pZ3JhdGluZy5cbiAqIEBicmVha2luZy1jaGFuZ2UgMTcuMC4wXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXRMZWdhY3lBdXRvY29tcGxldGVIYXJuZXNzIGV4dGVuZHMgX01hdEF1dG9jb21wbGV0ZUhhcm5lc3NCYXNlPFxuICB0eXBlb2YgTWF0TGVnYWN5T3B0aW9uSGFybmVzcyxcbiAgTWF0TGVnYWN5T3B0aW9uSGFybmVzcyxcbiAgTGVnYWN5T3B0aW9uSGFybmVzc0ZpbHRlcnMsXG4gIHR5cGVvZiBNYXRMZWdhY3lPcHRncm91cEhhcm5lc3MsXG4gIE1hdExlZ2FjeU9wdGdyb3VwSGFybmVzcyxcbiAgTGVnYWN5T3B0Z3JvdXBIYXJuZXNzRmlsdGVyc1xuPiB7XG4gIHByb3RlY3RlZCBfcHJlZml4ID0gJ21hdCc7XG4gIHByb3RlY3RlZCBfb3B0aW9uQ2xhc3MgPSBNYXRMZWdhY3lPcHRpb25IYXJuZXNzO1xuICBwcm90ZWN0ZWQgX29wdGlvbkdyb3VwQ2xhc3MgPSBNYXRMZWdhY3lPcHRncm91cEhhcm5lc3M7XG5cbiAgLyoqIFRoZSBzZWxlY3RvciBmb3IgdGhlIGhvc3QgZWxlbWVudCBvZiBhIGBNYXRBdXRvY29tcGxldGVgIGluc3RhbmNlLiAqL1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJy5tYXQtYXV0b2NvbXBsZXRlLXRyaWdnZXInO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhIGBNYXRBdXRvY29tcGxldGVIYXJuZXNzYCB0aGF0IG1lZXRzXG4gICAqIGNlcnRhaW4gY3JpdGVyaWEuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBhdXRvY29tcGxldGUgaW5zdGFuY2VzIGFyZSBjb25zaWRlcmVkIGEgbWF0Y2guXG4gICAqIEByZXR1cm4gYSBgSGFybmVzc1ByZWRpY2F0ZWAgY29uZmlndXJlZCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdpdGgoXG4gICAgb3B0aW9uczogTGVnYWN5QXV0b2NvbXBsZXRlSGFybmVzc0ZpbHRlcnMgPSB7fSxcbiAgKTogSGFybmVzc1ByZWRpY2F0ZTxNYXRMZWdhY3lBdXRvY29tcGxldGVIYXJuZXNzPiB7XG4gICAgcmV0dXJuIG5ldyBIYXJuZXNzUHJlZGljYXRlKE1hdExlZ2FjeUF1dG9jb21wbGV0ZUhhcm5lc3MsIG9wdGlvbnMpXG4gICAgICAuYWRkT3B0aW9uKCd2YWx1ZScsIG9wdGlvbnMudmFsdWUsIChoYXJuZXNzLCB2YWx1ZSkgPT5cbiAgICAgICAgSGFybmVzc1ByZWRpY2F0ZS5zdHJpbmdNYXRjaGVzKGhhcm5lc3MuZ2V0VmFsdWUoKSwgdmFsdWUpLFxuICAgICAgKVxuICAgICAgLmFkZE9wdGlvbignZGlzYWJsZWQnLCBvcHRpb25zLmRpc2FibGVkLCBhc3luYyAoaGFybmVzcywgZGlzYWJsZWQpID0+IHtcbiAgICAgICAgcmV0dXJuIChhd2FpdCBoYXJuZXNzLmlzRGlzYWJsZWQoKSkgPT09IGRpc2FibGVkO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==