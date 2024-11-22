import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  providers:[HttpClientModule,
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';

  videoUrl = '';

  constructor(private http: HttpClient) {}

  downloadVideo() {
    const videoUrlEncoded = encodeURIComponent(this.videoUrl);
    window.open(`http://localhost:3000/download?url=${videoUrlEncoded}`, '_blank');
    // window.open(`http://localhost:3000/download?url=${encodeURIComponent(this.videoUrl)}`, '_blank');
    // this.http.post('http://localhost:3000/download', { url: this.videoUrl }, { responseType: 'blob' })
    //   .subscribe((response: Blob) => {
    //     console.log("got response here")
    //     const a = document.createElement('a');
    //     const objectUrl = URL.createObjectURL(response);
    //     a.href = objectUrl;
    //     a.download = 'video.mp4'; // The filename will come from the server if available.
    //     a.click();
    //     URL.revokeObjectURL(objectUrl);
    //   }, error => {
    //     console.error('Download failed', error);
    //   });
  }
}
