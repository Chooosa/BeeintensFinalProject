import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { isScreenBelow1400, isScreenBelow800 } from 'account/common/breakpoint/selectors';
import { Flex } from 'components';
import { HeaderLayout, SectionNavList, CoreNavList, NavItem, Logo } from './components';
import ContentIndent from '../ContentIndent';


function Header({ isDesktop, isMobile, className }) {
  return (
    <HeaderLayout className={className}>
      <ContentIndent>
        <Flex>
          { isDesktop ? (
            <SectionNavList>
              {({ slug, name, url }) => (
                <NavItem href={url} key={slug}>{name}</NavItem>
              )}
            </SectionNavList>
          ) : null}
          { isDesktop ? <Logo /> : null }
          { !isMobile ? (
            <CoreNavList>
              {({ slug, name }) => (
                <NavItem type={slug} key={slug}>{name}</NavItem>
              )}
            </CoreNavList>
          ) : null}
        </Flex>
      </ContentIndent>
    </HeaderLayout>
  );
}

Header.propTypes = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
  className: PropTypes.string,
};


const mapStateToProps = state => ({
  isMobile: isScreenBelow800(state),
  isDesktop: !isScreenBelow1400(state),
});

export default connect(mapStateToProps)(Header);
