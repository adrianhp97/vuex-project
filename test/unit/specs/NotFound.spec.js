import NotFound from '@/components/NotFound';
import Vue from 'vue';

describe('NotFound.vue', () => {
  it('check NotFound page', () => {
    const Constructor = Vue.extend(NotFound);
    const NotFoundComponent = new Constructor().$mount();
  })
})