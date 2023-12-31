/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, HarnessPredicate, } from '@angular/cdk/testing';
export class _MatErrorHarnessBase extends ComponentHarness {
    /** Gets a promise for the error's label text. */
    async getText() {
        return (await this.host()).text();
    }
    static _getErrorPredicate(type, options) {
        return new HarnessPredicate(type, options).addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text));
    }
}
/** Harness for interacting with an MDC-based `mat-error` in tests. */
export class MatErrorHarness extends _MatErrorHarnessBase {
    static { this.hostSelector = '.mat-mdc-form-field-error'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for an error with specific
     * attributes.
     * @param options Options for filtering which error instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return _MatErrorHarnessBase._getErrorPredicate(this, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItaGFybmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC9mb3JtLWZpZWxkL3Rlc3RpbmcvZXJyb3ItaGFybmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBRUwsZ0JBQWdCLEVBRWhCLGdCQUFnQixHQUNqQixNQUFNLHNCQUFzQixDQUFDO0FBUTlCLE1BQU0sT0FBZ0Isb0JBQXFCLFNBQVEsZ0JBQWdCO0lBQ2pFLGlEQUFpRDtJQUNqRCxLQUFLLENBQUMsT0FBTztRQUNYLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFUyxNQUFNLENBQUMsa0JBQWtCLENBQ2pDLElBQW9DLEVBQ3BDLE9BQTRCO1FBRTVCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxFQUFFLENBQzNGLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFFRCxzRUFBc0U7QUFDdEUsTUFBTSxPQUFPLGVBQWdCLFNBQVEsb0JBQW9CO2FBQ2hELGlCQUFZLEdBQUcsMkJBQTJCLENBQUM7SUFFbEQ7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUVULFVBQStCLEVBQUU7UUFFakMsT0FBTyxvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBCYXNlSGFybmVzc0ZpbHRlcnMsXG4gIENvbXBvbmVudEhhcm5lc3MsXG4gIENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcixcbiAgSGFybmVzc1ByZWRpY2F0ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Rlc3RpbmcnO1xuXG4vKiogQSBzZXQgb2YgY3JpdGVyaWEgdGhhdCBjYW4gYmUgdXNlZCB0byBmaWx0ZXIgYSBsaXN0IG9mIGVycm9yIGhhcm5lc3MgaW5zdGFuY2VzLiAqL1xuZXhwb3J0IGludGVyZmFjZSBFcnJvckhhcm5lc3NGaWx0ZXJzIGV4dGVuZHMgQmFzZUhhcm5lc3NGaWx0ZXJzIHtcbiAgLyoqIE9ubHkgZmluZCBpbnN0YW5jZXMgd2hvc2UgdGV4dCBtYXRjaGVzIHRoZSBnaXZlbiB2YWx1ZS4gKi9cbiAgdGV4dD86IHN0cmluZyB8IFJlZ0V4cDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIF9NYXRFcnJvckhhcm5lc3NCYXNlIGV4dGVuZHMgQ29tcG9uZW50SGFybmVzcyB7XG4gIC8qKiBHZXRzIGEgcHJvbWlzZSBmb3IgdGhlIGVycm9yJ3MgbGFiZWwgdGV4dC4gKi9cbiAgYXN5bmMgZ2V0VGV4dCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5ob3N0KCkpLnRleHQoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgX2dldEVycm9yUHJlZGljYXRlPFQgZXh0ZW5kcyBNYXRFcnJvckhhcm5lc3M+KFxuICAgIHR5cGU6IENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcjxUPixcbiAgICBvcHRpb25zOiBFcnJvckhhcm5lc3NGaWx0ZXJzLFxuICApOiBIYXJuZXNzUHJlZGljYXRlPFQ+IHtcbiAgICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUodHlwZSwgb3B0aW9ucykuYWRkT3B0aW9uKCd0ZXh0Jywgb3B0aW9ucy50ZXh0LCAoaGFybmVzcywgdGV4dCkgPT5cbiAgICAgIEhhcm5lc3NQcmVkaWNhdGUuc3RyaW5nTWF0Y2hlcyhoYXJuZXNzLmdldFRleHQoKSwgdGV4dCksXG4gICAgKTtcbiAgfVxufVxuXG4vKiogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhbiBNREMtYmFzZWQgYG1hdC1lcnJvcmAgaW4gdGVzdHMuICovXG5leHBvcnQgY2xhc3MgTWF0RXJyb3JIYXJuZXNzIGV4dGVuZHMgX01hdEVycm9ySGFybmVzc0Jhc2Uge1xuICBzdGF0aWMgaG9zdFNlbGVjdG9yID0gJy5tYXQtbWRjLWZvcm0tZmllbGQtZXJyb3InO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhbiBlcnJvciB3aXRoIHNwZWNpZmljXG4gICAqIGF0dHJpYnV0ZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBlcnJvciBpbnN0YW5jZXMgYXJlIGNvbnNpZGVyZWQgYSBtYXRjaC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aDxUIGV4dGVuZHMgTWF0RXJyb3JIYXJuZXNzPihcbiAgICB0aGlzOiBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8VD4sXG4gICAgb3B0aW9uczogRXJyb3JIYXJuZXNzRmlsdGVycyA9IHt9LFxuICApOiBIYXJuZXNzUHJlZGljYXRlPFQ+IHtcbiAgICByZXR1cm4gX01hdEVycm9ySGFybmVzc0Jhc2UuX2dldEVycm9yUHJlZGljYXRlKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=