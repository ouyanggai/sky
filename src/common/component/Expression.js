import React, {useEffect} from 'react';
import Animation from 'animejs'
import '../css/Expression.less'
/**
 * 全屏演示文案组件
 */
function Expression(){
  useEffect(() => {
    new Animation({
      targets:'p',
      opacity:[0, 1],
      duration: 36000,
      loop: false,
      translateX: 50,
      scale: 2
    })
  }, [])
  return(
    <React.Fragment>
      <div className="cencent">
        <div>
          <p className="txt">我乐意守在你左右 为你挡雨遮风</p>
          <p className="txt2">今后的路我陪你一起走过</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Expression
