export default {
  // mutations中直接修改State的地址数据
  saveAddress (ctx, data) {
    ctx.address.push(data)
  }
}
