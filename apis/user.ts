import { devError } from '@/utils/system';
import { getMyProfileResponse, getBlogResponse } from '@/types/user';
import instance from './instance';
import { CategoryQueryKeys, CategoryValues } from '@/components/Atom/Card/types';
import { BlogGroupProps } from '@/components/Molecules/BlogGroup/type';

export const getUserProfile = async (path: string) => {
  try {
    const { data } = await instance.get<getMyProfileResponse>(`/user/${path}`);
    return data;
  } catch (e) {
    devError('getUserProfilAPI error', e);
    throw e;
  }
};

export const getUserBlog = async (path: string) => {
  try {
    const { data } = await instance.get<BlogGroupProps>(`/blogs/${path}`);

    return data;
  } catch (e) {
    devError('getUserBlogAPI error', e);
    throw e;
  }
};

type TimeLinePost = {
  categoryIdentifier: CategoryQueryKeys;
  categoryName: CategoryValues;
  createdAt: string;
  hitCount: number;
  identifier: string;
  profileImgSrc: string;
  summary: string;
  title: string;
  url: string;
  userName: string;
  userPath: string;
};
type TimeLineResponse = {
  nextPageToken: string;
  posts: TimeLinePost[];
  size: number;
};

export const fetchUserTimeline = async (path: string, pageToken: string = '', from?: number, to?: number) => {
  try {
    const params = pageToken ? { size: 5, pageToken, from, to } : { size: 5, from, to };
    const { data } = await instance.get<TimeLineResponse>(`/post/user/${path}`, { params });
    return data;
  } catch (e) {
    devError('getUserTimelineAPI error', e);
    throw e;
  }
};

type FetchUserGrassParams = {
  path: string;
  from: number;
  to: number;
};
type FetchUserGrassResponse = {
  metas: string[];
};
export const fetchUserGrass = async ({ path, from, to }: FetchUserGrassParams) => {
  try {
    const { data } = await instance.get<FetchUserGrassResponse>(`/post/user/${path}/meta`, {
      params: {
        from,
        to,
      },
    });
    // const response = await axios.get(`http://152.69.231.228:8080/v1`, { params });

    return data;
  } catch (e) {
    devError('getUserGrassAPI error', e);
    throw e;
  }
};

export const fetchRetrospectGrass = async ({ path, from, to }: FetchUserGrassParams) => {
  try {
    const { data } = await instance.get<FetchUserGrassResponse>(`/retrospect/${path}/meta`, {
      params: {
        from,
        to,
      },
    });

    return data;
  } catch (e) {
    devError('getRetrospectGrassAPI error', e);
    throw e;
  }
};

export const putEditTimeline = async ({
  postIdentifier,
  editedContent,
}: {
  postIdentifier: string;
  editedContent: {};
}) => {
  try {
    const params = { ...editedContent };
    const res = await instance.put(`/post/${postIdentifier}`, { ...editedContent });

    return res;
  } catch (e) {
    devError('putEditTimelineAPI error', e);
    throw e;
  }
};

export const deleteTimeline = async ({ postIdentifier }: { postIdentifier: string }) => {
  try {
    const res = await instance.delete(`/post/${postIdentifier}`);

    return res;
  } catch (e) {
    devError('deleteTimelineAPI error', e);
    throw e;
  }
};
