import React from 'react';
import classNames from 'classnames/bind';

import commonStyles from 'styles/common.pcss';

import { PageLayout } from 'shared';

import { LessonsList } from './components';

const cx = classNames.bind(commonStyles);

export default function LessonsPage() {  
  return (
    <PageLayout>
      <LessonsList className={cx('container')}/>
    </PageLayout>
  );
}
