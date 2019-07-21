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

//Note to self... there might be a typo above?  Instead of 5 unival subtrees, I think there are only 4?  Unless you count the entire tree itself as a subtree, then that is 5.

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
const binroot = new myNode(8, node6, node7);

//suppose we do the same for the unival tree:

const root_right_left_left = new myNode(1);
const root_right_left_right = new myNode(1);
const root_right_left = new myNode(1, root_right_left_left, root_right_left_right);
const root_right_right = new myNode(0);
const root_left = new myNode(1);
const root_right = new myNode(0, root_right_left, root_right_right);
const root = new myNode(0, root_left, root_right);

//We note that what it is really asking for is how many nodes are where the left and right are both defined as 'none'.

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  $('#output-section-3').text(3);
  $('#output-section-4').text(4);
  });
