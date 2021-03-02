# js-testing-funcdamental-learning

### how jest works?

### how jest mocking works?

Mocking允许测试是确定性的，确保每次得到的都是相同结果。
使用Mocks确保函数可以正确调用。
monkey patching 只适合commonjs，不适合ES module的情况。
jest.fn
jest.spyOn
jest.mock在jest运行测试code之前，会被提到文件顶部优先执行。
对于想要共享的JavaScript mock 模块，可以放在Jest的__mocks__
的目录， jest会自动加载。
#### mock的几种方式
1. 在JavaScript里， 可以使用Monkey-patching来覆盖对象的属性进行mock
