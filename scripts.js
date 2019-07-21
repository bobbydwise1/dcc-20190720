/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

  0
 / \
1   0
   / \
  1   0
 / \
1   1

*/

/* problem reworded:??
We note that a 'regular' binary tree doesn't have the nodes equal the same value:

  8
 / \
6   7
   / \
  2   5
 / \
1   3

Also, the left child is the smaller number.  The above binary tree can be represented in Javascript as:
*/

class myNode {
  constructor (value, left='none', right='none') {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node3 = new myNode(3);
const node1 = new myNode(1);
const node2 = new myNode(2, node1, node3);
const node5 = new myNode(5);
const node7 = new myNode(7, node2, node5);
const node6 = new myNode(6);
const node8 = new myNode(8, node6,node7);


$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
  $('#output-section-4').text(4);
  });
