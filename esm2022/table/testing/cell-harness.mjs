/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ContentContainerComponentHarness, HarnessPredicate, } from '@angular/cdk/testing';
export class _MatCellHarnessBase extends ContentContainerComponentHarness {
    /** Gets the cell's text. */
    async getText() {
        return (await this.host()).text();
    }
    /** Gets the name of the column that the cell belongs to. */
    async getColumnName() {
        const host = await this.host();
        const classAttribute = await host.getAttribute('class');
        if (classAttribute) {
            const prefix = 'mat-column-';
            const name = classAttribute
                .split(' ')
                .map(c => c.trim())
                .find(c => c.startsWith(prefix));
            if (name) {
                return name.split(prefix)[1];
            }
        }
        throw Error('Could not determine column name of cell.');
    }
    static _getCellPredicate(type, options) {
        return new HarnessPredicate(type, options)
            .addOption('text', options.text, (harness, text) => HarnessPredicate.stringMatches(harness.getText(), text))
            .addOption('columnName', options.columnName, (harness, name) => HarnessPredicate.stringMatches(harness.getColumnName(), name));
    }
}
/** Harness for interacting with an MDC-based Angular Material table cell. */
export class MatCellHarness extends _MatCellHarnessBase {
    /** The selector for the host element of a `MatCellHarness` instance. */
    static { this.hostSelector = '.mat-mdc-cell'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a table cell with specific attributes.
     * @param options Options for narrowing the search
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return _MatCellHarnessBase._getCellPredicate(this, options);
    }
}
/** Harness for interacting with an MDC-based Angular Material table header cell. */
export class MatHeaderCellHarness extends _MatCellHarnessBase {
    /** The selector for the host element of a `MatHeaderCellHarness` instance. */
    static { this.hostSelector = '.mat-mdc-header-cell'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a table header cell with specific
     * attributes.
     * @param options Options for narrowing the search
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return _MatCellHarnessBase._getCellPredicate(this, options);
    }
}
/** Harness for interacting with an MDC-based Angular Material table footer cell. */
export class MatFooterCellHarness extends _MatCellHarnessBase {
    /** The selector for the host element of a `MatFooterCellHarness` instance. */
    static { this.hostSelector = '.mat-mdc-footer-cell'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a table footer cell with specific
     * attributes.
     * @param options Options for narrowing the search
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return _MatCellHarnessBase._getCellPredicate(this, options);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1oYXJuZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsL3RhYmxlL3Rlc3RpbmcvY2VsbC1oYXJuZXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFFTCxnQ0FBZ0MsRUFDaEMsZ0JBQWdCLEdBQ2pCLE1BQU0sc0JBQXNCLENBQUM7QUFHOUIsTUFBTSxPQUFnQixtQkFBb0IsU0FBUSxnQ0FBZ0M7SUFDaEYsNEJBQTRCO0lBQzVCLEtBQUssQ0FBQyxPQUFPO1FBQ1gsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELDREQUE0RDtJQUM1RCxLQUFLLENBQUMsYUFBYTtRQUNqQixNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixNQUFNLGNBQWMsR0FBRyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFeEQsSUFBSSxjQUFjLEVBQUU7WUFDbEIsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDO1lBQzdCLE1BQU0sSUFBSSxHQUFHLGNBQWM7aUJBQ3hCLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQ1YsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFFbkMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFFRCxNQUFNLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFUyxNQUFNLENBQUMsaUJBQWlCLENBQ2hDLElBQW9DLEVBQ3BDLE9BQTJCO1FBRTNCLE9BQU8sSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2FBQ3ZDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUNqRCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksQ0FBQyxDQUN4RDthQUNBLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUM3RCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUM5RCxDQUFDO0lBQ04sQ0FBQztDQUNGO0FBRUQsNkVBQTZFO0FBQzdFLE1BQU0sT0FBTyxjQUFlLFNBQVEsbUJBQW1CO0lBQ3JELHdFQUF3RTthQUNqRSxpQkFBWSxHQUFHLGVBQWUsQ0FBQztJQUV0Qzs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUE4QixFQUFFO1FBQzFDLE9BQU8sbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7O0FBR0gsb0ZBQW9GO0FBQ3BGLE1BQU0sT0FBTyxvQkFBcUIsU0FBUSxtQkFBbUI7SUFDM0QsOEVBQThFO2FBQ3ZFLGlCQUFZLEdBQUcsc0JBQXNCLENBQUM7SUFFN0M7Ozs7O09BS0c7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQThCLEVBQUU7UUFDMUMsT0FBTyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7QUFHSCxvRkFBb0Y7QUFDcEYsTUFBTSxPQUFPLG9CQUFxQixTQUFRLG1CQUFtQjtJQUMzRCw4RUFBOEU7YUFDdkUsaUJBQVksR0FBRyxzQkFBc0IsQ0FBQztJQUU3Qzs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBOEIsRUFBRTtRQUMxQyxPQUFPLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7XG4gIENvbXBvbmVudEhhcm5lc3NDb25zdHJ1Y3RvcixcbiAgQ29udGVudENvbnRhaW5lckNvbXBvbmVudEhhcm5lc3MsXG4gIEhhcm5lc3NQcmVkaWNhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7Q2VsbEhhcm5lc3NGaWx0ZXJzfSBmcm9tICcuL3RhYmxlLWhhcm5lc3MtZmlsdGVycyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBfTWF0Q2VsbEhhcm5lc3NCYXNlIGV4dGVuZHMgQ29udGVudENvbnRhaW5lckNvbXBvbmVudEhhcm5lc3Mge1xuICAvKiogR2V0cyB0aGUgY2VsbCdzIHRleHQuICovXG4gIGFzeW5jIGdldFRleHQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gKGF3YWl0IHRoaXMuaG9zdCgpKS50ZXh0KCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgbmFtZSBvZiB0aGUgY29sdW1uIHRoYXQgdGhlIGNlbGwgYmVsb25ncyB0by4gKi9cbiAgYXN5bmMgZ2V0Q29sdW1uTmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IGhvc3QgPSBhd2FpdCB0aGlzLmhvc3QoKTtcbiAgICBjb25zdCBjbGFzc0F0dHJpYnV0ZSA9IGF3YWl0IGhvc3QuZ2V0QXR0cmlidXRlKCdjbGFzcycpO1xuXG4gICAgaWYgKGNsYXNzQXR0cmlidXRlKSB7XG4gICAgICBjb25zdCBwcmVmaXggPSAnbWF0LWNvbHVtbi0nO1xuICAgICAgY29uc3QgbmFtZSA9IGNsYXNzQXR0cmlidXRlXG4gICAgICAgIC5zcGxpdCgnICcpXG4gICAgICAgIC5tYXAoYyA9PiBjLnRyaW0oKSlcbiAgICAgICAgLmZpbmQoYyA9PiBjLnN0YXJ0c1dpdGgocHJlZml4KSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lLnNwbGl0KHByZWZpeClbMV07XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhyb3cgRXJyb3IoJ0NvdWxkIG5vdCBkZXRlcm1pbmUgY29sdW1uIG5hbWUgb2YgY2VsbC4nKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBzdGF0aWMgX2dldENlbGxQcmVkaWNhdGU8VCBleHRlbmRzIE1hdENlbGxIYXJuZXNzPihcbiAgICB0eXBlOiBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3I8VD4sXG4gICAgb3B0aW9uczogQ2VsbEhhcm5lc3NGaWx0ZXJzLFxuICApOiBIYXJuZXNzUHJlZGljYXRlPFQ+IHtcbiAgICByZXR1cm4gbmV3IEhhcm5lc3NQcmVkaWNhdGUodHlwZSwgb3B0aW9ucylcbiAgICAgIC5hZGRPcHRpb24oJ3RleHQnLCBvcHRpb25zLnRleHQsIChoYXJuZXNzLCB0ZXh0KSA9PlxuICAgICAgICBIYXJuZXNzUHJlZGljYXRlLnN0cmluZ01hdGNoZXMoaGFybmVzcy5nZXRUZXh0KCksIHRleHQpLFxuICAgICAgKVxuICAgICAgLmFkZE9wdGlvbignY29sdW1uTmFtZScsIG9wdGlvbnMuY29sdW1uTmFtZSwgKGhhcm5lc3MsIG5hbWUpID0+XG4gICAgICAgIEhhcm5lc3NQcmVkaWNhdGUuc3RyaW5nTWF0Y2hlcyhoYXJuZXNzLmdldENvbHVtbk5hbWUoKSwgbmFtZSksXG4gICAgICApO1xuICB9XG59XG5cbi8qKiBIYXJuZXNzIGZvciBpbnRlcmFjdGluZyB3aXRoIGFuIE1EQy1iYXNlZCBBbmd1bGFyIE1hdGVyaWFsIHRhYmxlIGNlbGwuICovXG5leHBvcnQgY2xhc3MgTWF0Q2VsbEhhcm5lc3MgZXh0ZW5kcyBfTWF0Q2VsbEhhcm5lc3NCYXNlIHtcbiAgLyoqIFRoZSBzZWxlY3RvciBmb3IgdGhlIGhvc3QgZWxlbWVudCBvZiBhIGBNYXRDZWxsSGFybmVzc2AgaW5zdGFuY2UuICovXG4gIHN0YXRpYyBob3N0U2VsZWN0b3IgPSAnLm1hdC1tZGMtY2VsbCc7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgdGFibGUgY2VsbCB3aXRoIHNwZWNpZmljIGF0dHJpYnV0ZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIG5hcnJvd2luZyB0aGUgc2VhcmNoXG4gICAqIEByZXR1cm4gYSBgSGFybmVzc1ByZWRpY2F0ZWAgY29uZmlndXJlZCB3aXRoIHRoZSBnaXZlbiBvcHRpb25zLlxuICAgKi9cbiAgc3RhdGljIHdpdGgob3B0aW9uczogQ2VsbEhhcm5lc3NGaWx0ZXJzID0ge30pOiBIYXJuZXNzUHJlZGljYXRlPE1hdENlbGxIYXJuZXNzPiB7XG4gICAgcmV0dXJuIF9NYXRDZWxsSGFybmVzc0Jhc2UuX2dldENlbGxQcmVkaWNhdGUodGhpcywgb3B0aW9ucyk7XG4gIH1cbn1cblxuLyoqIEhhcm5lc3MgZm9yIGludGVyYWN0aW5nIHdpdGggYW4gTURDLWJhc2VkIEFuZ3VsYXIgTWF0ZXJpYWwgdGFibGUgaGVhZGVyIGNlbGwuICovXG5leHBvcnQgY2xhc3MgTWF0SGVhZGVyQ2VsbEhhcm5lc3MgZXh0ZW5kcyBfTWF0Q2VsbEhhcm5lc3NCYXNlIHtcbiAgLyoqIFRoZSBzZWxlY3RvciBmb3IgdGhlIGhvc3QgZWxlbWVudCBvZiBhIGBNYXRIZWFkZXJDZWxsSGFybmVzc2AgaW5zdGFuY2UuICovXG4gIHN0YXRpYyBob3N0U2VsZWN0b3IgPSAnLm1hdC1tZGMtaGVhZGVyLWNlbGwnO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhIHRhYmxlIGhlYWRlciBjZWxsIHdpdGggc3BlY2lmaWNcbiAgICogYXR0cmlidXRlcy5cbiAgICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyBmb3IgbmFycm93aW5nIHRoZSBzZWFyY2hcbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aChvcHRpb25zOiBDZWxsSGFybmVzc0ZpbHRlcnMgPSB7fSk6IEhhcm5lc3NQcmVkaWNhdGU8TWF0SGVhZGVyQ2VsbEhhcm5lc3M+IHtcbiAgICByZXR1cm4gX01hdENlbGxIYXJuZXNzQmFzZS5fZ2V0Q2VsbFByZWRpY2F0ZSh0aGlzLCBvcHRpb25zKTtcbiAgfVxufVxuXG4vKiogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhbiBNREMtYmFzZWQgQW5ndWxhciBNYXRlcmlhbCB0YWJsZSBmb290ZXIgY2VsbC4gKi9cbmV4cG9ydCBjbGFzcyBNYXRGb290ZXJDZWxsSGFybmVzcyBleHRlbmRzIF9NYXRDZWxsSGFybmVzc0Jhc2Uge1xuICAvKiogVGhlIHNlbGVjdG9yIGZvciB0aGUgaG9zdCBlbGVtZW50IG9mIGEgYE1hdEZvb3RlckNlbGxIYXJuZXNzYCBpbnN0YW5jZS4gKi9cbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LW1kYy1mb290ZXItY2VsbCc7XG5cbiAgLyoqXG4gICAqIEdldHMgYSBgSGFybmVzc1ByZWRpY2F0ZWAgdGhhdCBjYW4gYmUgdXNlZCB0byBzZWFyY2ggZm9yIGEgdGFibGUgZm9vdGVyIGNlbGwgd2l0aCBzcGVjaWZpY1xuICAgKiBhdHRyaWJ1dGVzLlxuICAgKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIGZvciBuYXJyb3dpbmcgdGhlIHNlYXJjaFxuICAgKiBAcmV0dXJuIGEgYEhhcm5lc3NQcmVkaWNhdGVgIGNvbmZpZ3VyZWQgd2l0aCB0aGUgZ2l2ZW4gb3B0aW9ucy5cbiAgICovXG4gIHN0YXRpYyB3aXRoKG9wdGlvbnM6IENlbGxIYXJuZXNzRmlsdGVycyA9IHt9KTogSGFybmVzc1ByZWRpY2F0ZTxNYXRGb290ZXJDZWxsSGFybmVzcz4ge1xuICAgIHJldHVybiBfTWF0Q2VsbEhhcm5lc3NCYXNlLl9nZXRDZWxsUHJlZGljYXRlKHRoaXMsIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=