/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ComponentHarness, HarnessPredicate, } from '@angular/cdk/testing';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { MatSliderThumbHarness } from './slider-thumb-harness';
/** Harness for interacting with a MDC mat-slider in tests. */
export class MatSliderHarness extends ComponentHarness {
    static { this.hostSelector = '.mat-mdc-slider'; }
    /**
     * Gets a `HarnessPredicate` that can be used to search for a slider with specific attributes.
     * @param options Options for filtering which input instances are considered a match.
     * @return a `HarnessPredicate` configured with the given options.
     */
    static with(options = {}) {
        return new HarnessPredicate(this, options)
            .addOption('isRange', options.isRange, async (harness, value) => {
            return (await harness.isRange()) === value;
        })
            .addOption('disabled', options.disabled, async (harness, disabled) => {
            return (await harness.isDisabled()) === disabled;
        });
    }
    /** Gets the start thumb of the slider (only applicable for range sliders). */
    async getStartThumb() {
        if (!(await this.isRange())) {
            throw Error('`getStartThumb` is only applicable for range sliders. ' +
                'Did you mean to use `getEndThumb`?');
        }
        return this.locatorFor(MatSliderThumbHarness.with({ position: 0 /* ThumbPosition.START */ }))();
    }
    /** Gets the thumb (for single point sliders), or the end thumb (for range sliders). */
    async getEndThumb() {
        return this.locatorFor(MatSliderThumbHarness.with({ position: 1 /* ThumbPosition.END */ }))();
    }
    /** Gets whether the slider is a range slider. */
    async isRange() {
        return await (await this.host()).hasClass('mdc-slider--range');
    }
    /** Gets whether the slider is disabled. */
    async isDisabled() {
        return await (await this.host()).hasClass('mdc-slider--disabled');
    }
    /** Gets the value step increments of the slider. */
    async getStep() {
        // The same step value is forwarded to both thumbs.
        const startHost = await (await this.getEndThumb()).host();
        return coerceNumberProperty(await startHost.getProperty('step'));
    }
    /** Gets the maximum value of the slider. */
    async getMaxValue() {
        return (await this.getEndThumb()).getMaxValue();
    }
    /** Gets the minimum value of the slider. */
    async getMinValue() {
        const startThumb = (await this.isRange())
            ? await this.getStartThumb()
            : await this.getEndThumb();
        return startThumb.getMinValue();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLWhhcm5lc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwvc2xpZGVyL3Rlc3Rpbmcvc2xpZGVyLWhhcm5lc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLGdCQUFnQixFQUVoQixnQkFBZ0IsR0FDakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUU3RCw4REFBOEQ7QUFDOUQsTUFBTSxPQUFPLGdCQUFpQixTQUFRLGdCQUFnQjthQUM3QyxpQkFBWSxHQUFHLGlCQUFpQixDQUFDO0lBRXhDOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsSUFBSSxDQUVULFVBQWdDLEVBQUU7UUFFbEMsT0FBTyxJQUFJLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7YUFDdkMsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDOUQsT0FBTyxDQUFDLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssS0FBSyxDQUFDO1FBQzdDLENBQUMsQ0FBQzthQUNELFNBQVMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFO1lBQ25FLE9BQU8sQ0FBQyxNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLFFBQVEsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCw4RUFBOEU7SUFDOUUsS0FBSyxDQUFDLGFBQWE7UUFDakIsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtZQUMzQixNQUFNLEtBQUssQ0FDVCx3REFBd0Q7Z0JBQ3RELG9DQUFvQyxDQUN2QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSw2QkFBcUIsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hGLENBQUM7SUFFRCx1RkFBdUY7SUFDdkYsS0FBSyxDQUFDLFdBQVc7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEVBQUMsUUFBUSwyQkFBbUIsRUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3RGLENBQUM7SUFFRCxpREFBaUQ7SUFDakQsS0FBSyxDQUFDLE9BQU87UUFDWCxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCwyQ0FBMkM7SUFDM0MsS0FBSyxDQUFDLFVBQVU7UUFDZCxPQUFPLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxvREFBb0Q7SUFDcEQsS0FBSyxDQUFDLE9BQU87UUFDWCxtREFBbUQ7UUFDbkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUQsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLFNBQVMsQ0FBQyxXQUFXLENBQVMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsNENBQTRDO0lBQzVDLEtBQUssQ0FBQyxXQUFXO1FBQ2YsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVELDRDQUE0QztJQUM1QyxLQUFLLENBQUMsV0FBVztRQUNmLE1BQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM1QixDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsT0FBTyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBDb21wb25lbnRIYXJuZXNzLFxuICBDb21wb25lbnRIYXJuZXNzQ29uc3RydWN0b3IsXG4gIEhhcm5lc3NQcmVkaWNhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay90ZXN0aW5nJztcbmltcG9ydCB7Y29lcmNlTnVtYmVyUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQge1NsaWRlckhhcm5lc3NGaWx0ZXJzLCBUaHVtYlBvc2l0aW9ufSBmcm9tICcuL3NsaWRlci1oYXJuZXNzLWZpbHRlcnMnO1xuaW1wb3J0IHtNYXRTbGlkZXJUaHVtYkhhcm5lc3N9IGZyb20gJy4vc2xpZGVyLXRodW1iLWhhcm5lc3MnO1xuXG4vKiogSGFybmVzcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBhIE1EQyBtYXQtc2xpZGVyIGluIHRlc3RzLiAqL1xuZXhwb3J0IGNsYXNzIE1hdFNsaWRlckhhcm5lc3MgZXh0ZW5kcyBDb21wb25lbnRIYXJuZXNzIHtcbiAgc3RhdGljIGhvc3RTZWxlY3RvciA9ICcubWF0LW1kYy1zbGlkZXInO1xuXG4gIC8qKlxuICAgKiBHZXRzIGEgYEhhcm5lc3NQcmVkaWNhdGVgIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VhcmNoIGZvciBhIHNsaWRlciB3aXRoIHNwZWNpZmljIGF0dHJpYnV0ZXMuXG4gICAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgZm9yIGZpbHRlcmluZyB3aGljaCBpbnB1dCBpbnN0YW5jZXMgYXJlIGNvbnNpZGVyZWQgYSBtYXRjaC5cbiAgICogQHJldHVybiBhIGBIYXJuZXNzUHJlZGljYXRlYCBjb25maWd1cmVkIHdpdGggdGhlIGdpdmVuIG9wdGlvbnMuXG4gICAqL1xuICBzdGF0aWMgd2l0aDxUIGV4dGVuZHMgTWF0U2xpZGVySGFybmVzcz4oXG4gICAgdGhpczogQ29tcG9uZW50SGFybmVzc0NvbnN0cnVjdG9yPFQ+LFxuICAgIG9wdGlvbnM6IFNsaWRlckhhcm5lc3NGaWx0ZXJzID0ge30sXG4gICk6IEhhcm5lc3NQcmVkaWNhdGU8VD4ge1xuICAgIHJldHVybiBuZXcgSGFybmVzc1ByZWRpY2F0ZSh0aGlzLCBvcHRpb25zKVxuICAgICAgLmFkZE9wdGlvbignaXNSYW5nZScsIG9wdGlvbnMuaXNSYW5nZSwgYXN5bmMgKGhhcm5lc3MsIHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiAoYXdhaXQgaGFybmVzcy5pc1JhbmdlKCkpID09PSB2YWx1ZTtcbiAgICAgIH0pXG4gICAgICAuYWRkT3B0aW9uKCdkaXNhYmxlZCcsIG9wdGlvbnMuZGlzYWJsZWQsIGFzeW5jIChoYXJuZXNzLCBkaXNhYmxlZCkgPT4ge1xuICAgICAgICByZXR1cm4gKGF3YWl0IGhhcm5lc3MuaXNEaXNhYmxlZCgpKSA9PT0gZGlzYWJsZWQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSBzdGFydCB0aHVtYiBvZiB0aGUgc2xpZGVyIChvbmx5IGFwcGxpY2FibGUgZm9yIHJhbmdlIHNsaWRlcnMpLiAqL1xuICBhc3luYyBnZXRTdGFydFRodW1iKCk6IFByb21pc2U8TWF0U2xpZGVyVGh1bWJIYXJuZXNzPiB7XG4gICAgaWYgKCEoYXdhaXQgdGhpcy5pc1JhbmdlKCkpKSB7XG4gICAgICB0aHJvdyBFcnJvcihcbiAgICAgICAgJ2BnZXRTdGFydFRodW1iYCBpcyBvbmx5IGFwcGxpY2FibGUgZm9yIHJhbmdlIHNsaWRlcnMuICcgK1xuICAgICAgICAgICdEaWQgeW91IG1lYW4gdG8gdXNlIGBnZXRFbmRUaHVtYmA/JyxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxvY2F0b3JGb3IoTWF0U2xpZGVyVGh1bWJIYXJuZXNzLndpdGgoe3Bvc2l0aW9uOiBUaHVtYlBvc2l0aW9uLlNUQVJUfSkpKCk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgdGh1bWIgKGZvciBzaW5nbGUgcG9pbnQgc2xpZGVycyksIG9yIHRoZSBlbmQgdGh1bWIgKGZvciByYW5nZSBzbGlkZXJzKS4gKi9cbiAgYXN5bmMgZ2V0RW5kVGh1bWIoKTogUHJvbWlzZTxNYXRTbGlkZXJUaHVtYkhhcm5lc3M+IHtcbiAgICByZXR1cm4gdGhpcy5sb2NhdG9yRm9yKE1hdFNsaWRlclRodW1iSGFybmVzcy53aXRoKHtwb3NpdGlvbjogVGh1bWJQb3NpdGlvbi5FTkR9KSkoKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHNsaWRlciBpcyBhIHJhbmdlIHNsaWRlci4gKi9cbiAgYXN5bmMgaXNSYW5nZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gYXdhaXQgKGF3YWl0IHRoaXMuaG9zdCgpKS5oYXNDbGFzcygnbWRjLXNsaWRlci0tcmFuZ2UnKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHdoZXRoZXIgdGhlIHNsaWRlciBpcyBkaXNhYmxlZC4gKi9cbiAgYXN5bmMgaXNEaXNhYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gYXdhaXQgKGF3YWl0IHRoaXMuaG9zdCgpKS5oYXNDbGFzcygnbWRjLXNsaWRlci0tZGlzYWJsZWQnKTtcbiAgfVxuXG4gIC8qKiBHZXRzIHRoZSB2YWx1ZSBzdGVwIGluY3JlbWVudHMgb2YgdGhlIHNsaWRlci4gKi9cbiAgYXN5bmMgZ2V0U3RlcCgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIC8vIFRoZSBzYW1lIHN0ZXAgdmFsdWUgaXMgZm9yd2FyZGVkIHRvIGJvdGggdGh1bWJzLlxuICAgIGNvbnN0IHN0YXJ0SG9zdCA9IGF3YWl0IChhd2FpdCB0aGlzLmdldEVuZFRodW1iKCkpLmhvc3QoKTtcbiAgICByZXR1cm4gY29lcmNlTnVtYmVyUHJvcGVydHkoYXdhaXQgc3RhcnRIb3N0LmdldFByb3BlcnR5PHN0cmluZz4oJ3N0ZXAnKSk7XG4gIH1cblxuICAvKiogR2V0cyB0aGUgbWF4aW11bSB2YWx1ZSBvZiB0aGUgc2xpZGVyLiAqL1xuICBhc3luYyBnZXRNYXhWYWx1ZSgpOiBQcm9taXNlPG51bWJlcj4ge1xuICAgIHJldHVybiAoYXdhaXQgdGhpcy5nZXRFbmRUaHVtYigpKS5nZXRNYXhWYWx1ZSgpO1xuICB9XG5cbiAgLyoqIEdldHMgdGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIHNsaWRlci4gKi9cbiAgYXN5bmMgZ2V0TWluVmFsdWUoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICBjb25zdCBzdGFydFRodW1iID0gKGF3YWl0IHRoaXMuaXNSYW5nZSgpKVxuICAgICAgPyBhd2FpdCB0aGlzLmdldFN0YXJ0VGh1bWIoKVxuICAgICAgOiBhd2FpdCB0aGlzLmdldEVuZFRodW1iKCk7XG4gICAgcmV0dXJuIHN0YXJ0VGh1bWIuZ2V0TWluVmFsdWUoKTtcbiAgfVxufVxuIl19