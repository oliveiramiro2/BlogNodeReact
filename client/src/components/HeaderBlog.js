import React from 'react'
import {
    Header, HeaderName, HeaderContainer, SkipToContent, HeaderMenuButton, HeaderNavigation, HeaderMenuItem,
    HeaderMenu
} from 'carbon-components-react'

const HeaderBlog = props => {
    return (
        <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="IBM Platform Name">
            <SkipToContent />
            <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
            />
            <HeaderName href="#" prefix="Blog">
             - Faça sua publicação
            </HeaderName>
            <HeaderNavigation aria-label="IBM [Platform]">
            <HeaderMenuItem href="#">Link</HeaderMenuItem>
            <HeaderMenuItem href="#">Link</HeaderMenuItem>
            <HeaderMenuItem href="#">Link</HeaderMenuItem>
            <HeaderMenu aria-label="Link dropdown" menuLinkName="Link dropdown">
                <HeaderMenuItem href="#">Sub-link</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link</HeaderMenuItem>
                <HeaderMenuItem href="#">Sub-link</HeaderMenuItem>
            </HeaderMenu>
            </HeaderNavigation>
        </Header>
        )}
    />
    )
}

export default HeaderBlog