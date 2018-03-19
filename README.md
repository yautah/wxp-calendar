# wxp-calendar

> 小程序日历插件。（已发布，插件的相关使用问题及bug反馈，欢迎大家提交至本repo的issues）

# 插件appid

> 本插件appid为 wx42b95b4509175304

# 当前版本
> 1.0.1

## 说明

> 本插件内包含两个自定义组件，date-picker和checkin-picker

## 使用方式

> 本插件appid为wx42b95b4509175304， 请在小程序后台设置 > 第三方服务 > 插件中搜索此插件appid并使用。小程序 app.json 中使用插件的样例代码：
```javascript
"plugins": {
    "calender": {
      "version": "1.0.1",
      "provider": "wx42b95b4509175304"
    }
  }
```

## API
## date-picker(日历选择组件）

### date-picker【props 】

| 名称         | 类型|描述                                                                                                           |
| ------------ |--- |-------------------------------------------------------------------------------------------------------------- |
| `date`       |string |[说明]：日期选择期中默认选择的时间，如未传，默认选中当前时间(格式: "yyyy-MM-dd DD:HH:mm")                                                   |
| `enableTime` |bool | [说明]：是否允许选择时间，由于微信默认 time 的 picker 仅支持到分，这里同样，有兴趣的同学可自行拓展至支持时分秒 |

### date-picker【bind 】

| 名称           | 描述                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------- |
| `onselectdate` | [说明]：选择时间后点击确定会触发此事件，在使用此组件的 Page，或者 Component 中响应此事件即可 |

## 使用

> 可参见 demo

## 截图

![](https://github.com/yautah/wxp-calendar/blob/master/snapshots/1.png?raw=true)
![](https://github.com/yautah/wxp-calendar/blob/master/snapshots/2.png?raw=true)
![](https://github.com/yautah/wxp-calendar/blob/master/snapshots/3.png?raw=true)




## API
## checkin-picker(酒店/旅馆等行业用于选择入住/离店日期的日历组件）

### checkin-picker【props 】

| 名称         | 类型|描述                                                                                                           |
| ------------ | --- |-------------------------------------------------------------------------------------------------------------- |
| `limitDays`       |number |[说明]：可选择的连续入住天数                                                  |
| `limitMonths`       |number |[说明]：可接几个月内的预订（显示几个月的日历）                                                   |
| `checkInOn`       |number |[说明]：默认入住日期（时间戳，毫秒数） |
| `checkOutOn`       |number |[说明]：默认离开日期（时间戳，毫秒数） |
| `checkInText`       | string|[说明]：入住文字显示（默认“入住”）|
| `checkOutText` | string |[说明]：入住文字显示（默认“离店”） |
| `checkedColor` | string |[说明]：选中日期的背景色 |
| `checkedTextColor` | string |[说明]：选中日期的文字颜色 |

### checkin-picker【bind 】

| 名称           | 描述                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------- |
| `onconfirm` | [说明]：选择入住/离店时间后的trigger事件 |

## 使用

> 可参见 demo

## 截图

![](https://github.com/yautah/wxp-calendar/blob/master/snapshots/4.png?raw=true)
![](https://github.com/yautah/wxp-calendar/blob/master/snapshots/5.png?raw=true)
![](https://github.com/yautah/wxp-calendar/blob/master/snapshots/6.png?raw=true)
