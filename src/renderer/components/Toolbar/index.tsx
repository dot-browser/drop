import * as React from 'react';
import { WindowsControls } from 'react-windows-controls';
import { StyledToolbar, DropLogoWrapper, DropLogo } from './style';
import { remote } from 'electron';
import { icons } from '@/renderer/constants/icons';
import { onMaximize, onMinimize, onClose, isMaximized } from './../../actions/window';
import { Actions } from '../Actions';
import { hot } from 'react-hot-loader/root';
import { Separator } from '../Separator/style';
import ToolbarButton from './../ToolbarItem/ToolbarItem';

const Toolbar = () => (
    <StyledToolbar id="toolbar">
        <div style={{ marginLeft: '8px' }}>
            
        </div>
        <div style={{ justifyContent: 'flex-end', display: 'flex' }}>
            <Actions />
            <Separator />
            <WindowsControls 
                style={{ WebkitAppRegion: 'no-drag' }} 
                onClose={onClose}
                onMinimize={onMinimize} 
                onMaximize={onMaximize} 
                isMaximized={isMaximized()} 
            />
        </div>    
    </StyledToolbar>
)

export default hot(Toolbar);