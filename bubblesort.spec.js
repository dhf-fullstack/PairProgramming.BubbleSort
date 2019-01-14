describe('Bubble Sort', function(){

  beforeAll(function () {
    spyOn(window, "swap").and.callThrough();
    spyOn(window, "comparison").and.callThrough()
  });

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles a single array', function(){
    expect( bubbleSort([4]) ).toEqual([4]);
  });
  it('handles an array with two elements', function(){
    expect( bubbleSort([9,4 ]) ).toEqual([4, 9]);
  });
  it('handles an array with multiple elements', function(){
    expect( bubbleSort([9, 4, 8, 5, 17, -5 ]) ).toEqual([-5, 4, 5, 8, 9, 17]);
  });
  it('sort empty array makes no swaps', function(){
    window.swap.calls.reset();
    bubbleSort([])
    expect(window.swap.calls.count()).toEqual(0)
  });
  it('sort sorted array makes no swaps', function(){
    window.swap.calls.reset();
    bubbleSort([1,2,3,4,5])
    expect(window.swap.calls.count()).toEqual(0)
  });
  it('sort makes expected number of swaps', function(){
    window.swap.calls.reset();
    bubbleSort([1,2,5,4,3])
    expect(window.swap.calls.count()).toEqual(3)
  });
  it('makes a comparison', function(){
    window.comparison.calls.reset();
    bubbleSort([])
    expect(window.comparison.calls.count()).toEqual(0)
  });
  it('makes a comparison', function(){
    window.comparison.calls.reset();
    bubbleSort([4])
    expect(window.comparison.calls.count()).toEqual(0)
  });
  it('makes a comparison', function(){
    window.comparison.calls.reset();
    bubbleSort([1,2,3])
    expect(window.comparison.calls.count()).toEqual(2)
  });
  it('makes a comparison', function(){
    window.comparison.calls.reset();
    bubbleSort([1,2,4,3])
    expect(window.comparison.calls.count()).toEqual(3)
  });
});
