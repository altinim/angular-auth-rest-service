/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { HarnessPredicate } from '@angular/cdk/testing';
import { MatLegacyListHarnessBase } from './list-harness-base';
import { getListItemPredicate, MatLegacyListItemHarnessBase } from './list-item-harness-base';
/**
 * Harness for interacting with a standard mat-list in tests.
 * @deprecated Use `MatListHarness` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyListHarness extends MatLegacyListHarnessBase {
    constructor() {
        super(...arguments);
        this._itemHarness = MatLegacyListItemHarness;
    }
    /** The selector for the host element of a `MatList` instance. */
    static { this.hostSelector = '.mat-list:not(mat-action-list)'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatListHarness` that meets certain
     * criteria.
     * @param options Options for filtering which list instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(MatLegacyListHarness, options);
    }
}
/**
 * Harness for interacting with a list item.
 * @deprecated Use `MatListItemHarness` from `@angular/material/list/testing` instead. See https://material.angular.io/guide/mdc-migration for information about migrating.
 * @breaking-change 17.0.0
 */
export class MatLegacyListItemHarness extends MatLegacyListItemHarnessBase {
    /** The selector for the host element of a `MatListItem` instance. */
    static { this.hostSelector = `${MatLegacyListHarness.hostSelector} .mat-list-item`; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a `MatListItemHarness` that meets
     * certain criteria.
     * @param options Options for filtering which list item instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return getListItemPredicate(MatLegacyListItemHarness, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL2xlZ2FjeS1saXN0L3Rlc3RpbmcvbGlzdC1oYXJuZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBRTdELE9BQU8sRUFBQyxvQkFBb0IsRUFBRSw0QkFBNEIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBRTVGOzs7O0dBSUc7QUFDSCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsd0JBSXpDO0lBSkQ7O1FBa0JXLGlCQUFZLEdBQUcsd0JBQXdCLENBQUM7SUFDbkQsQ0FBQztJQWRDLGlFQUFpRTthQUMxRCxpQkFBWSxHQUFHLGdDQUFnQyxBQUFuQyxDQUFvQztJQUV2RDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBb0MsRUFBRTtRQUNoRCxPQUFPLElBQUksZ0JBQWdCLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7QUFLSDs7OztHQUlHO0FBQ0gsTUFBTSxPQUFPLHdCQUF5QixTQUFRLDRCQUE0QjtJQUN4RSxxRUFBcUU7YUFDOUQsaUJBQVksR0FBRyxHQUFHLG9CQUFvQixDQUFDLFlBQVksaUJBQWlCLENBQUM7SUFFNUU7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUNULFVBQXdDLEVBQUU7UUFFMUMsT0FBTyxvQkFBb0IsQ0FBQyx3QkFBd0IsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SGFybmVzc1ByZWRpY2F0ZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuaW1wb3J0IHtNYXRMZWdhY3lMaXN0SGFybmVzc0Jhc2V9IGZyb20gJy4vbGlzdC1oYXJuZXNzLWJhc2UnO1xuaW1wb3J0IHtMZWdhY3lMaXN0SGFybmVzc0ZpbHRlcnMsIExlZ2FjeUxpc3RJdGVtSGFybmVzc0ZpbHRlcnN9IGZyb20gJy4vbGlzdC1oYXJuZXNzLWZpbHRlcnMnO1xuaW1wb3J0IHtnZXRMaXN0SXRlbVByZWRpY2F0ZSwgTWF0TGVnYWN5TGlzdEl0ZW1IYXJuZXNzQmFzZX0gZnJvbSAnLi9saXN0LWl0ZW0taGFybmVzcy1iYXNlJztcblxuLyoqXG4gKiBIYXJuZXNzIGZvciBpbnRlcmFjdGluZyB3aXRoIGEgc3RhbmRhcmQgbWF0LWxpc3QgaW4gdGVzdHMuXG4gKiBAZGVwcmVjYXRlZCBVc2UgYE1hdExpc3RIYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9saXN0L3Rlc3RpbmdgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdExlZ2FjeUxpc3RIYXJuZXNzIGV4dGVuZHMgTWF0TGVnYWN5TGlzdEhhcm5lc3NCYXNlPFxuICB0eXBlb2YgTWF0TGVnYWN5TGlzdEl0ZW1IYXJuZXNzLFxuICBNYXRMZWdhY3lMaXN0SXRlbUhhcm5lc3MsXG4gIExlZ2FjeUxpc3RJdGVtSGFybmVzc0ZpbHRlcnNcbj4ge1xuICAvKiogVGhlIHNlbGVjdG9yIGZvciB0aGUgaG9zdCBlbGVtZW50IG9mIGEgYE1hdExpc3RgIGluc3RhbmNlLiAqL1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJy5tYXQtbGlzdDpub3QobWF0LWFjdGlvbi1saXN0KSc7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgYE1hdExpc3RIYXJuZXNzYCB0aGF0IG1lZXRzIGNlcnRhaW5cbiAgICogY3JpdGVyaWEuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBsaXN0IGluc3RhbmNlcyBhcmUgY29uc2lkZXJlZCBhIG1hdGNoLlxuICAgKiBAcmV0dXJuIGEgYEhhcm5lc3NQcmVkaWNhdGVgIGNvbmZpZ3VyZWQgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICovXG4gIHN0YXRpYyB3aXRoKG9wdGlvbnM6IExlZ2FjeUxpc3RIYXJuZXNzRmlsdGVycyA9IHt9KTogSGFybmVzc1ByZWRpY2F0ZTxNYXRMZWdhY3lMaXN0SGFybmVzcz4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZShNYXRMZWdhY3lMaXN0SGFybmVzcywgb3B0aW9ucyk7XG4gIH1cblxuICBvdmVycmlkZSBfaXRlbUhhcm5lc3MgPSBNYXRMZWdhY3lMaXN0SXRlbUhhcm5lc3M7XG59XG5cbi8qKlxuICogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIGxpc3QgaXRlbS5cbiAqIEBkZXByZWNhdGVkIFVzZSBgTWF0TGlzdEl0ZW1IYXJuZXNzYCBmcm9tIGBAYW5ndWxhci9tYXRlcmlhbC9saXN0L3Rlc3RpbmdgIGluc3RlYWQuIFNlZSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvbWRjLW1pZ3JhdGlvbiBmb3IgaW5mb3JtYXRpb24gYWJvdXQgbWlncmF0aW5nLlxuICogQGJyZWFraW5nLWNoYW5nZSAxNy4wLjBcbiAqL1xuZXhwb3J0IGNsYXNzIE1hdExlZ2FjeUxpc3RJdGVtSGFybmVzcyBleHRlbmRzIE1hdExlZ2FjeUxpc3RJdGVtSGFybmVzc0Jhc2Uge1xuICAvKiogVGhlIHNlbGVjdG9yIGZvciB0aGUgaG9zdCBlbGVtZW50IG9mIGEgYE1hdExpc3RJdGVtYCBpbnN0YW5jZS4gKi9cbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9IGAke01hdExlZ2FjeUxpc3RIYXJuZXNzLmhvc3RTZWxlY3Rvcn0gLm1hdC1saXN0LWl0ZW1gO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhIGBNYXRMaXN0SXRlbUhhcm5lc3NgIHRoYXQgbWVldHNcbiAgICogY2VydGFpbiBjcml0ZXJpYS5cbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgZmlsdGVyaW5nIHdoaWNoIGxpc3QgaXRlbSBpbnN0YW5jZXMgYXJlIGNvbnNpZGVyZWQgYSBtYXRjaC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChcbiAgICBvcHRpb25zOiBMZWdhY3lMaXN0SXRlbUhhcm5lc3NGaWx0ZXJzID0ge30sXG4gICk6IEhhcm5lc3NQcmVkaWNhdGU8TWF0TGVnYWN5TGlzdEl0ZW1IYXJuZXNzPiB7XG4gICAgcmV0dXJuIGdldExpc3RJdGVtUHJlZGljYXRlKE1hdExlZ2FjeUxpc3RJdGVtSGFybmVzcywgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==