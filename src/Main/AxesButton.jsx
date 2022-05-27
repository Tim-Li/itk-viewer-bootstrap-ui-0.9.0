import React from 'react'
import { useActor, useSelector } from '@xstate/react'
import { axesIconDataUri } from 'itk-viewer-icons'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import cn from 'classnames'

const AxesButton = React.memo(function AxesButton(props) {
  const { service } = props
  const selectCount = (state) => state.context.main.axesEnabled
  const stateAxesEnabled = useSelector(service, selectCount)
  const send = service.send

  return (
    <OverlayTrigger transition={false} overlay={<Tooltip> Axes </Tooltip>}>
      <Button
        className={cn('icon-button', {
          checked: stateAxesEnabled
        })}
        onClick={() => send('TOGGLE_AXES')}
        variant="secondary"
      >
        <Image src={axesIconDataUri}></Image>
      </Button>
    </OverlayTrigger>
  )
})

export default AxesButton
