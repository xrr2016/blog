'use strict';

const { app, assert } = require('egg-mock/bootstrap');

describe('用户服务测试', () => {

  let ctx

  before(() => {
    ctx = app.mockContext({
      user: {
        name: 'your-name',
      },
    });

    ctx.request.headers = {
      authorization: yourToken
    };
  })

  it('create 方法返回新增用户成功信息', async () => {
    const data = {
      name: 'user name' + Date.now(),
      age: parseInt(Math.random() * 60),
      gender: Math.random() > .5 ? 'male' : 'female'
    };

    const response = await ctx.service.user.create(data);

    assert(response.success === true);
    assert(response.payload.length > 0);
  });

})



