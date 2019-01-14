describe('Bubble Sort', function(){
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
  })
});
