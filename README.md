# XDSecond-hand-trading-platform
The second-hand trading platform of Xidian University micro-WeChat applet, local version
## 思路
先有一个大体的规划，版面的设计布局是什么样子的，由于事先有样例的布局，所以这步并不是很难。
#### 布局
从上到下依次是，顶部导航栏，顶部搜索框，上部滑动幻灯片板块，近期热门板块，下部近期热门的精选图片和文字幻灯片播放，下部分类导航栏，售卖信息主要内容。
#### 实现逻辑
首先应该在wxml文件中写出整体布局，样式处理交给wxss来完成，界面中的交互逻辑实现交给js文件，以及一些数据都放到js中的data里。（因为只是实现一个界面，如果实现多个界面应将其单独放到一个文件中）
#### 实现思路
wxml中，上面不随用户滑动的部分应该是首页导航栏和搜索框，所以这两个部分不放在<scroll-view>标签中，其余部分放到该标签中，随着用户的滑动而滑动。
+ 顶部导航栏
实现方法参考了[小程序-导航栏](https://www.jianshu.com/p/a046388be889)中的方法和技巧，其实很简单，就是先放入一个view容器，使用wx:for的方法将js文件中的data中的tablist（即导航栏数据）导入该容器中，在容器中再添加一个text文本容器，{{item}}依次显示这些文本信息。导航栏的样式使用css样式
```css
.tablist{
  display: flex;
  background-color: #1d699c;
  height: 80rpx;
}
.tablist .item.select{
  color: #64d6b4
}
.tablist .item.select::after{
  content: "";
  height: 6rpx;
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #64d6b4;
}
.content{
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
其中比较重要的就是::after这个伪类，可以帮助我们增加选中以后的下面那条横线的样式。
+ 搜索框
布局是，左边一个放大镜的搜索图片，后面是一个搜索区域，并且有内置文字。方法就是在一个<view>容器中放入<image>和<input>两个容器，iamge放图片，input是后面的搜索框，添加内容即可（并未实现跳转的作用），放进去好说，难得是样式的设计，钻研一段时间，使用了笨方法，改变内置两容器边缘的位置实现横向分布布局。
  ```css
  .search{
  width: 100%;
  height: 65rpx;
  padding: 12.5rpx 12.5rpx 12.5rpx 12.5rpx;
  background: #e6e6e6;
  }
  .search-left{
  
  background: #e6e6e6;
  text-align: left;
  }
  .search-left text{
  display: inline-block;

  vertical-align: middle;
  margin: -17% 0 0 10%;
  color: #a0acac;
  font-size: 15px;
  }
  .search-left input{
  display: inline-block;
  height: 65rpx;
  font-size: 26rpx;
  width: 90%;
  }
  .search-placeholder{
  background-color: #ffffff;
  line-height: 20rpx;
  width: 100%;
  margin-right: -80%;
  
  }
  .search .search-left image{
  display: inline-block;
  width: 35rpx;
  height: 35rpx;
  padding: 15rpx 15rpx 15rpx 20rpx;
  }

  ```
  这里可以采用直接对标签来设计样式的方法来提高效率。
  + 顶部滚动栏目
  采用<swiper>标签，设置为横向滚动，设计点的形状大小，自动滑动设置为true，滑动时间3000ms等，样式设计等类似于上面，仅需设置高宽即可。
  + 近期热门
  这个栏目现在有些问题，不过通过样式的方法暂时看不出来，就是容器的位置不知道为什么会乱，可能是样式的问题。待解决。
  + 下部推荐栏目
  这个和顶部滚动栏目基本类似，图片容器放左边，设置一下边缘位置，文字容器放左边，暂时使用简单的文字进行描述，成段落或者分行的文字还未实现。样式和顶部   滚动栏目一致，高宽不同而已。
  + 主要内容
      + 布局，顶部：头像，出售信息的概括。中部：出售物件的图片和文字介绍。底部：发布时间，浏览人数（暂未实现)
      + 实现
      把所有的数据信息都放入了js文件中的data中的sell中，在sell-item中进行分类，以实现分类布局，item-source来源信息（添加头像和简介还有一个省略符图片），item-content出售的具体内容。
      在来源信息中布局，左边放图片容器，放入头像，文字容器放在图片容器的右面，省略符号图片放在最右边。由于并不会实现将方形图片设置为圆形，所以直接采用了圆形图片，日后待解决。
      出售内容和上述类似，不过大小宽度高度位置等有区别。
      
   #### 未实现
   + 分页切换的导航栏还只是一个摆设，并不能切换页面
   + 搜索框不能跳转链接
   + 最近热门栏目中有部分bug没改明白
   + 主要内容中的内容部分当字少的时候可以，字多了实现的比较丑，样式待改进
   + 其他页面
      
