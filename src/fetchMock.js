import fetchMock from 'fetch-mock';

export default function init() {
   fetchMock.get('http://api.example.com/content', {
      title: 'Title 111',
      context: 'context 1212121212',
   });
}
